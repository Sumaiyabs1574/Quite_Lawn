import { test, expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class otpPage {
   readonly page:Page;
readonly OtpHeading:Locator;


  constructor(page: Page) {
    this.page = page;
     this.OtpHeading=page.getByText('OTP Verification');;
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
