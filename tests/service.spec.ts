import { test, expect } from "@playwright/test";
import { servicePage } from "../pages/servicePage";

import { otpPage } from "../pages/otpPage";
import { packagePage } from "../pages/PackagePage";
import { bundlePage } from "../pages/bundlePage";
import { confirmOrderPage } from "../pages/ConfirmOrderPage";
import { completeServiceSelection } from "../helpers/completeServiceSelection";

test.describe(" service simplyfy Automation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8082/");
    await expect(page).toHaveTitle("Service Simplify");
  });

  test("full flow", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    const otp = new otpPage(page);
    const bundelSelection = new bundlePage(page);
    const order = new confirmOrderPage(page);

    await serviceSelection.selectService();
    await serviceSelection.fillPropertyDetails("1192 Checkerberry Street");
    await serviceSelection.fillpersonalDetails(
      "Sumaiya Habib Jim",
      "sumaiyahabib2323@gmail.com",
      "1234567890"
    );
    await serviceSelection.clickContinue();
    await otp.otpVarification();
    await bundelSelection.selectBundel();
    await page.waitForTimeout(3000);
    await order.paymentOption();
    await order.agreement();
  });


  test("Initial UI should load correctly with all inputs and checkboxes", async ({page,}) => {
    const serviceSelection = new servicePage(page);

    await expect(serviceSelection.loginButton).toBeVisible();
    await expect(serviceSelection.serviceTitle).toHaveText("Which service(s) are you interested in?");
    await expect(serviceSelection.checkboxes).toHaveCount(5);
    await expect(serviceSelection.addressheading).toHaveText("Where is your property located?");
    await expect(serviceSelection.AddressInputLabel).toHaveText("Property location *");
    await expect(serviceSelection.propertyLocationInput).toBeVisible();
    await expect(serviceSelection.nameInput).toBeVisible();
    await expect(serviceSelection.emailInput).toBeVisible();
    await expect(serviceSelection.phoneNumberInput).toBeVisible();
    await expect(serviceSelection.Fence).not.toBeChecked();
    await expect(serviceSelection.continueButton).toBeDisabled;
  });

  test("Select/Deselect Services", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    await expect(serviceSelection.serviceCheckbox3).not.toBeChecked();
    serviceSelection.serviceCheckbox3.click();
    await expect(serviceSelection.serviceCheckbox3).toBeChecked();
    serviceSelection.serviceCheckbox3.click();
    await expect(serviceSelection.serviceCheckbox3).not.toBeChecked();
    //select multiple
    serviceSelection.serviceCheckbox3.click();
    serviceSelection.serviceCheckbox5.click();
    //verify  2 service are selected
    await expect(serviceSelection.serviceCheckbox3).toBeChecked();
    await expect(serviceSelection.serviceCheckbox5).toBeChecked();
  });

  test("Property Location", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    //Enter a valid address and Select an address from the suggestions
    await serviceSelection.fillPropertyDetails("1192 Checkerberry Street");
    // Assert that the input is now empty
    await serviceSelection.propertyLocationInput.clear();
    await expect(serviceSelection.propertyLocationInput).toBeEmpty();
  });


  test("visit request", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    // Step 1: Navigate and initiate visit request
    await serviceSelection.visitrequest(
      "600 9th Street, Augusta, Georgia 30901, United States"
    );
    // Step 2: Ensure button is visible and click
    await expect(serviceSelection.RequestForVisitButton).toBeVisible();
    await serviceSelection.RequestForVisitButton.click();
    await page.waitForTimeout(5000);
    // Step 3: Check for warning about missing name and email
    const warningElement = await page.$(
      "text=Please fill in the following required fields: Name, Email"
    );
    if (warningElement) {
      console.log("Please fill in the following required fields: Name, Email");
      await serviceSelection.fillpersonalDetails(
        "Sumaiya Habib Jim",
        "sumaiyahabib2323@gmail.com",
        ""
      );
      await serviceSelection.RequestForVisitButton.click();
    }
    await page.waitForTimeout(3000);
  });

  test("countinue button funtionality", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    const otp = new otpPage(page);
    await expect(serviceSelection.continueButton).toBeDisabled();
    await serviceSelection.serviceCheckbox3.click();
    await serviceSelection.fillPropertyDetails("1192 Checkerberry Street");
    await expect(serviceSelection.continueButton).toBeEnabled();
    await serviceSelection.fillpersonalDetails(
      "sumaiya habib",
      "sumaiyahabib2323@gmail.com",
      "01827943502"
    );
    await serviceSelection.continueButton.click();
    await expect(otp.OtpHeading).toContainText("OTP Verification");
  });
  test("fence enable/disable",async ({page})=>{
  const serviceSelection = new servicePage(page);
  
  await serviceSelection.Fence.isDisabled();
  await serviceSelection.Fence.click();
  await serviceSelection.Fence.isEnabled();
  
  
});

test("email validation",async({page})=>{
const serviceSelection = new servicePage(page);
await serviceSelection.serviceCheckbox3.click();
await serviceSelection.fillPropertyDetails(
  "1192 Checkerberry Street"
)
//Test empty input
await serviceSelection.emailInput.fill('');
await serviceSelection.continueButton.click();
await expect(page.getByText('Email address is required')).toBeVisible()
// email with missing "@" symbol
await serviceSelection.emailInput.fill('testexample.com');
await serviceSelection.continueButton.click();
await expect(page.getByText('Please enter a valid email address')).toBeVisible()
//email with no domain
await serviceSelection.emailInput.fill('user@');
await serviceSelection.continueButton.click();
await expect(page.getByText('Please enter a valid email address')).toBeVisible()
//accept a valid email

await serviceSelection.emailInput.fill('sumaiyahabib2323@gmail.com');
await serviceSelection.continueButton.click();
await expect(page.getByText('Please enter a valid email address')).not.toBeVisible();

});


test("name field",async({page})=>{
const serviceSelection = new servicePage(page);
await serviceSelection.serviceCheckbox3.click();
await serviceSelection.fillPropertyDetails(
  "1192 Checkerberry Street"
)
await serviceSelection.nameInput.fill('')
 await serviceSelection.continueButton.click();
await expect(page.getByText('Name is required')).toBeVisible();

await serviceSelection.nameInput.fill('jim');
 await serviceSelection.continueButton.click();
await expect(page.getByText('Name is required')).not.toBeVisible();
 await serviceSelection.nameInput.clear();
 await serviceSelection.continueButton.click();
 await expect(page.getByText('Name is required')).toBeVisible()
});



  test("select service and countinue", async ({ page }) => {
    const serviceSelection = new servicePage(page);
    const otp = new otpPage(page);
  
    await serviceSelection.selectService();
    await serviceSelection.fillPropertyDetails("1192 Checkerberry Street");
    await serviceSelection.fillpersonalDetails(
      "Sumaiya Habib Jim",
      "sumaiyahabib2323@gmail.com",
      "1234567890"
    );
    await serviceSelection.clickContinue();
    
  });

  test("otp varification", async ({ page }) => {
    const otp = new otpPage(page);
    await completeServiceSelection(page);
    await otp.otpVarification();
  });
  test("User can select a package, add cart, and proceed", async ({ page }) => {
    const packageSelection = new packagePage(page);
    const otp = new otpPage(page);
    await completeServiceSelection(page);
    await otp.otpVarification();
  });
  test("bundel selection", async ({ page }) => {
    const bundelSelection = new bundlePage(page);
  });
  test("confram order", async ({ page }) => {
    const order = new confirmOrderPage(page);
  });
});
