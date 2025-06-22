import { test, expect } from '@playwright/test';

test('about page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/about');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('about-content')).toHaveText('This page was written and hosted using the following tools:');
});

test('about page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'About' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('about-content')).toHaveText('This page was written and hosted using the following tools:');
});
