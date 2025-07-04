import { test, expect, Page, Locator } from '@playwright/test';
 export class confirmOrderPage {

readonly page: Page;

readonly prepay:Locator;
readonly agrementCheckbox:Locator;
readonly signature:Locator;
readonly continueButton: Locator;

constructor(page:Page){
this.prepay=page.locator("(//span[normalize-space()='Pre-Pay'])[1]");
this.agrementCheckbox= page.getByRole('checkbox', { name: 'I agree to the Terms &' });
this.signature=page.getByRole('textbox', { name: 'Digital Signature' });
this.continueButton=page.getByRole('button', { name: 'Continue' });
}
async paymentOption (){

await this.prepay.click();
await this.continueButton.click();

 }
async agreement()
{
await this.agrementCheckbox.click();
await this.signature.fill("sumaiya");
await this.continueButton.click();

}
}