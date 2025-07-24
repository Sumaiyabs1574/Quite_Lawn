import {  expect } from '@playwright/test';

import { Page, Locator } from '@playwright/test';

export class servicePage{
  readonly page: Page;
readonly loginButton:Locator;
readonly serviceTitle :Locator;
  readonly serviceCheckbox3: Locator;
 readonly serviceCheckbox4: Locator;
  readonly serviceCheckbox5: Locator;
  readonly propertyLocationInput: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneNumberInput : Locator;
  readonly continueButton: Locator;
readonly checkboxes:Locator;
readonly   addressheading:Locator;
readonly AddressInputLabel :Locator;
readonly Fence:Locator;
readonly RequestForVisitButton:Locator;
readonly emailError:Locator;
constructor(page:Page){


this.page = page;
this.loginButton=page.locator("//span[normalize-space()='Login']")
 this.serviceTitle = page.locator('text=Which service(s) are you interested in?');
this.checkboxes = page.locator('[role="checkbox"]');
 this.addressheading=page.locator('text=Where is your property located?');
 this.AddressInputLabel=page.locator('label:has-text("Property location")')
;
    this.serviceCheckbox3 = page.locator("(//button[@value='on'])[3]");
this.serviceCheckbox4 = page.locator("(//button[@value='on'])[4]");
this.serviceCheckbox5 = page.locator("(//button[@value='on'])[5]");
    this.propertyLocationInput = page.locator("input[placeholder='Search for address']");
this.RequestForVisitButton=page.locator("//button[normalize-space()='Request For Visit']");
    this.nameInput = page.getByRole('textbox', { name: 'Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email *' })
    this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone Number (optional)' });
     this.Fence=page.locator('#«r9»-form-item');
     this.emailError=page.getByText('Email address is required')
    this.continueButton = page.getByRole('button', { name: 'Continue' })
  }


async selectService() {
    await this.serviceCheckbox3.click();
await this.serviceCheckbox4.click();
await this.serviceCheckbox5.click();
  }


async fillPropertyDetails(location: string ) {
   
    await this.propertyLocationInput.fill(location);
    await this.page.getByText('1192 Checkerberry Street,').click();
    

  
  
  }

 async visitrequest(location: string,){
await this.propertyLocationInput.fill(location);
 await this.page.getByText('600 9th Street, Augusta, Georgia 30901, United States').click();

}


async fillpersonalDetails(name: string, email: string, phone: string){
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneNumberInput.fill(phone);
  }



async clickContinue() {
 await this.page.waitForTimeout(5000);
await this.continueButton.click();
  }

  }

