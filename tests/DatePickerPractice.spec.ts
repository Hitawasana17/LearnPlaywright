import { test, expect, Page} from '@playwright/test';


async function fillDatePicker(page: Page, manualDate?: string){
  let dateToFill: string;

  if (manualDate){
    dateToFill = manualDate;
  }else {
    const today =new Date();
    const mm = String(today.getMonth()+1).padStart(2,'0');
    const dd= String (today.getDate()).padStart(2,'0');
    const yyyy = today.getFullYear();

    dateToFill = `${mm}/${dd}/${yyyy}`;
  }
  const dateInput = page.getByPlaceholder('mm/dd/yyyy');
  await dateInput.fill(dateToFill);
  await dateInput.press('Enter');
}
test('learn pw on website formy project-Datepicker page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', { timeout: 40000 });


  await page.getByRole('link', {name:'Datepicker'}).click()
  await page.waitForTimeout(3000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/datepicker');

  //Locator dari Playwright UI
  // await fillDatePicker(page);

  await fillDatePicker(page, '12/25/2026');
});
