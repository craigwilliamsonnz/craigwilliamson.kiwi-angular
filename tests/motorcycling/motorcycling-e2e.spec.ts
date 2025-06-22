import { test, expect } from '@playwright/test';

test('motorcycling page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/motorcycling');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('motorcycling-content')).toHaveText('Motorcycling works!');
});

test('motorcycling page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Motorcycling' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('motorcycling-content')).toHaveText('Motorcycling works!');
});
