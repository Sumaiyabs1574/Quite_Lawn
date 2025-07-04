
import { Page, Locator } from '@playwright/test';

export class servicePage{
  readonly page: Page;
  readonly serviceCheckbox1: Locator;
 readonly serviceCheckbox2: Locator;
  readonly serviceCheckbox3: Locator;
  readonly propertyLocationInput: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneNumberInput: Locator;
  readonly continueButton: Locator;


constructor(page:Page){


this.page = page;
    this.serviceCheckbox1 = page.getByRole('heading', { name: 'Mowing' });
this.serviceCheckbox2 = page.getByRole('heading', { name: 'Pest Control' });
this.serviceCheckbox3 = page.getByRole('heading', { name: 'Fertilization & Weed Control' });
    this.propertyLocationInput = page.locator("input[placeholder='Search for address']");
    this.nameInput = page.getByRole('textbox', { name: 'Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email *' })
    this.phoneNumberInput = page.getByRole('textbox', { name: 'Phone Number (optional)' });
     
    this.continueButton = page.getByRole('button', { name: 'Continue' })
  }


async selectService() {
    await this.serviceCheckbox1.click();
await this.serviceCheckbox2.click();
await this.serviceCheckbox3.click();
  }


async fillPropertyDetails(location: string, name: string, email: string, phone: string) {
   
    await this.propertyLocationInput.fill(location);
    await this.page.getByText('1192 Checkerberry Street,').click();

    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneNumberInput.fill(phone);
  }



async clickContinue() {
 await this.page.waitForTimeout(5000);
await this.continueButton.click();
  }

  }

