import { test, expect } from '@playwright/test';
import {fillAutoComplete} from "./Autocomplete.spec";

test('learn pw on website formy project-Dropdown page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', { timeout: 60000 });

  await page.getByRole('link', {name:'Dropdown'}).click();
  await page.getByRole('button',{name: 'Dropdown'}).click();
  await page.getByRole('link', {name: 'Autocomplete', exact: true}).click();
  await page.waitForTimeout(3000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');

  await fillAutoComplete(page);
});
