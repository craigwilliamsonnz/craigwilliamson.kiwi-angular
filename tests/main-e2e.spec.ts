import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Busy Life Of Craig");
});

test('home page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('button', { name: 'Enter' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('home-content')).toHaveText('Home page works!');
});
