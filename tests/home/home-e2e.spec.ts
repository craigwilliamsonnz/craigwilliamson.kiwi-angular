import { test, expect } from '@playwright/test';

test('home page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/home');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('home-content')).toHaveText('Home page works!');
});

test('home page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Home' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('home-content')).toHaveText('Home page works!');
});
