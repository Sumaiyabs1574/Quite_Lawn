
  await page.getByRole('button', { name: 'Verify Now' }).click();
  await page.locator('.w-5').first().click();
  await page.locator('div:nth-child(3) > .bg-white > .flex.flex-col.p-4 > .hidden > .text-right > .flex.justify-end > .w-5').click();
  await page.getByRole('heading', { name: 'Premium COMPLETE' }).click();
  await page.getByRole('button', { name: 'Add Cart' }).click();
  await page.locator('div:nth-child(4) > .bg-white > div > .hidden > .text-right > .flex.justify-end > .w-5').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('heading', { name: 'pic2' }).click();
  await page.getByRole('heading', { name: 'go' }).click();
  await page.locator('div').filter({ hasText: /^\$17\.19\$16\.33Per MonthAdd Cart$/ }).getByRole('button').click();
  await page.getByRole('main').locator('div').filter({ hasText: 'goMonthly goa $51.58$49.00Per' }).nth(3).click();
  await page.getByRole('button', { name: 'Add Cart' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('label').filter({ hasText: 'Pre-Pay3% Discount' }).locator('span').first().click();
});