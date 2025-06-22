import { test, expect } from '@playwright/test';

test('music page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/music');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('music-content')).toHaveText('Music works!');
});

test('music page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Music' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('music-content')).toHaveText('Music works!');
});
