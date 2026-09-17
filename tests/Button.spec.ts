import { test, expect, Page } from '@playwright/test';


export async function clickButton(page: Page){
  await page.getByRole('button', {name: 'Primary'}).click();
  await page.getByRole('button', {name: 'Success'}).click();
  await page.getByRole('button', {name: 'Info'}).click();
  await page.getByRole('button', {name: 'Warning'}).click();
  await page.getByRole('button', {name: 'Danger'}).click();

  await page.getByRole('button', {name: 'Link'}).click();

  await page.getByRole('button', {name: 'Left'}).click();
  await page.getByRole('button', {name: 'Middle'}).click();
  await page.getByRole('button', {name: 'Right'}).click();

  await page.getByRole('button', {name: '1'}).click();
  await page.getByRole('button', {name: '2'}).click();

  await page.getByRole('button', {name: 'Dropdown'}).click();
  await page.getByRole('link', {name: 'Dropdown link 1'}).click();
  await page.getByRole('button', {name: 'Dropdown'}).click();
  await page.getByRole('link', {name: 'Dropdown link 2'}).click();
}
test('learn pw on website formy project-button page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/buttons', {timeout: 60000});

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/buttons');

  //Locator dari Playwright UI
  await clickButton(page);
});
