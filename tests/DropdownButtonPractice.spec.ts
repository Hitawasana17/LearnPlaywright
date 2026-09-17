import { test, expect } from '@playwright/test';
import {clickButton} from "./Button.spec";

test('learn pw on website formy project-Dropdown page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', { timeout: 40000 });

  await page.getByRole('link', {name:'Dropdown'}).click();
  await page.getByRole('button',{name: 'Dropdown'}).click();
  await page.getByRole('link', {name: 'Buttons', exact: true}).click();
  await page.waitForTimeout(3000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/buttons');

  await clickButton(page);
});
