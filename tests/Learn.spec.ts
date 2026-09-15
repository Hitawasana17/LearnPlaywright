import { test, expect } from '@playwright/test';

test('learn pw on website formy project-autocomplete page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/')

  // await page.locator('[href="/autocomplete"]').nth(1).click()

  await page.getByRole('link', {name:'Autocomplete'}).click()
  await page.waitForTimeout(3000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');

  //Locator dari Playwright UI
  await page.getByPlaceholder('Enter address').fill('Semanggi')
  await page.getByPlaceholder('Street address', {exact: true}).fill('Jl. Flaminggo')
  await page.getByPlaceholder('Street address 2').fill('Semanggi Jakarta')
  await page.getByPlaceholder('City').fill('Jakarta')
  await page.getByPlaceholder('State').fill('South Jakarta')
  await page.getByPlaceholder('Zip code').fill('11240')
  await page.getByPlaceholder('Country').fill('Indonesia')

});
