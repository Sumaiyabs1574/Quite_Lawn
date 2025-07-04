import { test, expect, Page } from '@playwright/test';

export class otpPage {
  readonly page:Page;

  constructor(page: Page) {
    this.page = page;
  }

  async otpVarification(){

await this.page.locator("(//input[@id='otp'])[1]").fill('2');
await this.page.locator("(//input[@id='otp'])[2]").fill('0');
await this.page.locator("(//input[@id='otp'])[3]").fill('4');
await this.page.locator("(//input[@id='otp'])[4]").fill('0');
await this.page.locator("(//input[@id='otp'])[5]").fill('8');
await this.page.locator("(//input[@id='otp'])[6]").fill('0');
 await this.page.waitForTimeout(5000);

    // Step 4: Click the "Verify Now" button

  await this.page.getByRole('button', { name: 'Verify Now' }).click();
  await this.page.waitForTimeout(5000);
  
  }
}
