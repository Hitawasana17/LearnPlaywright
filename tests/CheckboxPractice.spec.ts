import {test, expect, Page} from '@playwright/test';

export async function pickCheckBox(page:Page){

  //Locator dari Playwright UI
  await page.locator('#checkbox-1').check();
  await page.locator('#checkbox-2').check();
  await page.locator('#checkbox-3').check();
}
test('learn pw on website formy project-Checkbox page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.getByRole('link', { name: 'Checkbox', exact: true }).click();

  await expect(page).toHaveURL('https://formy-project.herokuapp.com/checkbox');
  await pickCheckBox(page);
});
