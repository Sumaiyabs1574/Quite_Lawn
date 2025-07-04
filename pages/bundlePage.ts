import { test, expect, Page, Locator } from '@playwright/test';
 export class bundlePage {

readonly page: Page;
readonly Bundle1:Locator;
readonly Bundle2:Locator;
readonly continueButton: Locator;

constructor(page:Page){
this.Bundle1= page.locator("(//button[normalize-space()='Add Cart'])[1]");
this.Bundle2=page.locator("(//button[normalize-space()='Add Cart'])[2]");
this.continueButton=page.getByRole('button', { name: 'Continue' });
}
async selectBundel(){

await this.Bundle1.click();
//await this.Bundle2.click();

await this.continueButton.click();


 }}
