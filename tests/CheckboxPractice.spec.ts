import { test, expect } from '@playwright/test';

test('learn pw on website formy project-Checkbox page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', { timeout: 60000 });

  // await page.locator('[href="/autocomplete"]').nth(1).click()

  await page.getByRole('link', {name:'Checkbox'}).click()
  await page.waitForTimeout(3000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/checkbox');

  //Locator dari Playwright UI
  await page.locator('#checkbox-1').check();
  await page.locator('#checkbox-2').check();
  await page.locator('#checkbox-3').check();
});
