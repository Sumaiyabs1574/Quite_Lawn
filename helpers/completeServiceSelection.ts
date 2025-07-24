import { servicePage } from '../pages/servicePage';

export async function completeServiceSelection(page) {
  const serviceSelection = new servicePage(page);
  await serviceSelection.selectService();
  await serviceSelection.fillPropertyDetails(
    '1192 Checkerberry Street',
    'Sumaiya Habib Jim',
    'sumaiyahabib2323@gmail.com',
    '1234567890'
  );
  await serviceSelection.clickContinue();
}