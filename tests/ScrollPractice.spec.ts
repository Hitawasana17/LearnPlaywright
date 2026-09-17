import {test, expect, Page} from '@playwright/test';

export async function fillScrollPage(page:Page, fullName: string= 'Sedia Kawan', date: string = '09/10/2026'){
  const nameInput = page.getByPlaceholder('Full name');
  const dateInput = page.getByPlaceholder('MM/DD/YYYY');

  await nameInput.scrollIntoViewIfNeeded();

  await nameInput.fill(fullName);

  await dateInput.fill(date);
  await dateInput.press('Enter');
}

test('website formy project-Scroll page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 40000
  });
  await page.getByRole('link', { name: 'Page Scroll', exact: true }).click();

  await expect(page).toHaveURL('https://formy-project.herokuapp.com/scroll');

  await fillScrollPage(page);
});