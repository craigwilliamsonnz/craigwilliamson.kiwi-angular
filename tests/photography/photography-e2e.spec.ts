import { test, expect } from '@playwright/test';

test('photography page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/photography');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('photography-content')).toHaveText('Photography works!');
});

test('photography page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Photography' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('photography-content')).toHaveText('Photography works!');
});