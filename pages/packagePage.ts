import { Page, Locator } from '@playwright/test';

export class packagePage{
readonly page: Page;
readonly packageCheckbox1: Locator;
readonly packageCheckbox2: Locator;
readonly packageCheckbox3: Locator;
readonly addons:Locator;
readonly addcart:Locator;
readonly  continueButton: Locator;

constructor(page:Page){


this.page = page;
this.packageCheckbox1= page.getByRole('heading', { name: 'Bi-Monthly Pest Package' });
this.packageCheckbox2= page.getByRole('heading', { name: 'Peaceful Bi-Weekly Mowing' });
this.packageCheckbox3= page.getByRole('heading', { name: 'Premium Fertilization & Weed Control Program' });

//this.addons=page.getByRole('listitem', { name: /Premium COMPLETE Fertilization, Weed, & Insect Control Program/ }) ;
this.addcart=page.locator("(//button[@title='Add to cart'])[1]");
this.continueButton= page.getByRole('button', { name: 'Continue' });
}
async selectPackage(){

await this.packageCheckbox1.click();

await this.packageCheckbox2.click();

await this.packageCheckbox3.click();
await this.page.waitForTimeout(5000);
//await this.addons.click();
await this.addcart.click();

await this.continueButton.click();


}}