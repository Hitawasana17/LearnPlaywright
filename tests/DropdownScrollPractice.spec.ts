import { test, expect, Page} from '@playwright/test';
import {fillScrollPage} from "./ScrollPractice.spec";

test('learn pw on website formy project-Scroll page', async ({page}) => {
  await page.goto('https://formy-project.herokuapp.com/', {timeout: 60000});

  await page.getByRole('link', {name: 'Dropdown'}).click();
  await page.getByRole('button', {name: 'Dropdown'}).click();
  await page.getByRole('link', {name: 'Scroll'}).click();
  await page.waitForTimeout(6000)

  //validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/scroll');

  await fillScrollPage(page);
});