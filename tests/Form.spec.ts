import {test, expect, Page} from '@playwright/test';

export async function fillCompleteForm(page:Page, manualDate?: string){
  await page.getByPlaceholder('Enter first name').fill('Ada');
  await page.getByPlaceholder('Enter last name', {exact: true}).fill('Wong');
  await page.getByPlaceholder('Enter your job title').fill('Quality Assurance');
  await page.locator('#radio-button-2').check();
  await page.locator('#checkbox-1').check();
  await page.locator('#select-menu').selectOption({ label: '2-4' });

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

  await page.getByRole('button', {name: 'Submit'}).click();
}

test('website formy project-Form page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 40000
  });

  await page.getByRole('link', { name: 'Form', exact: true }).click();

  await expect(page).toHaveURL('https://formy-project.herokuapp.com/form');

  await fillCompleteForm(page);

  await expect(page).toHaveURL('https://formy-project.herokuapp.com/thanks');
});
