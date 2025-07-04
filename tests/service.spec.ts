 
import { test } from '@playwright/test';
import { servicePage} from '../pages/servicePage';

import { otpPage } from '../pages/otpPage';
import { packagePage } from '../pages/PackagePage';
import { bundlePage } from '../pages/bundlePage';
import { confirmOrderPage } from '../pages/ConfirmOrderPage';

test.describe(' Service Form Automation', () => {
  test('order', async ({ page }) => {
    const serviceSelection = new servicePage(page);
    const otp = new otpPage(page);
    const packageSelection = new packagePage(page);
    const bundelSelection=new bundlePage(page);
    const order= new confirmOrderPage(page);
    await page.goto('http://172.18.103.10:8082/'); 

    await serviceSelection.selectService();
    await serviceSelection.fillPropertyDetails(
      '1192 Checkerberry Street',
      'Sumaiya Habib Jim',
      'sumaiyahabib2323@gmail.com',
      '1234567890'
    );
//select service
await serviceSelection.clickContinue();
//OTP page
await otp.otpVarification();
//package selection
 await packageSelection.selectPackage();
 //bundle selection
 await bundelSelection.selectBundel();
 //confram order
 await page.waitForTimeout(3000);
  await order.paymentOption();
  
  await order.agreement();
  
  });
});

