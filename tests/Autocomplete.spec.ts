import {test, expect, Page} from '@playwright/test';

export async function fillAutoComplete(page:Page){
  await page.getByPlaceholder('Enter address').fill('Semanggi');
  await page.getByPlaceholder('Street address', {exact: true}).fill('Jl. Flaminggo');
  await page.getByPlaceholder('Street address 2').fill('Semanggi Jakarta');
  await page.getByPlaceholder('City').fill('Jakarta');
  await page.getByPlaceholder('State').fill('South Jakarta');
  await page.getByPlaceholder('Zip code').fill('11240');
  await page.getByPlaceholder('Country').fill('Indonesia');
}

test('website formy project-autocomplete page', async ({ page }) => {
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');
  await fillAutoComplete(page);
});
