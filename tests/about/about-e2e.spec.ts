import { test, expect } from '@playwright/test';

test('about page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.getByRole('link', { name: 'About' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('about-content')).toHaveText('This page was written and hosted using the following tools:');
});
