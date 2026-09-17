import {test, expect, Page} from '@playwright/test';

export async function pickRadioButton(page:Page, optionNumber:1|2|3=1){
  const radio= page.getByRole('radio').nth(optionNumber-1);
  await radio.check();
  await expect(radio).toBeChecked();
}
export async function clickAllRadioButton(page:Page){
  const count = await page.getByRole('radio').count();

  for (let i=0; i < count; i++){
    const radio = page.getByRole('radio').nth(i);
    await radio.check();
    await expect(radio).toBeChecked();
  }
}
test('learn pw on website formy project-Radio button page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.getByRole('link', { name: 'Radio Button', exact: true }).click();

  await expect(page).toHaveURL('https://formy-project.herokuapp.com/radiobutton');
  await clickAllRadioButton(page);
});
