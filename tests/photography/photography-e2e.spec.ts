import { test, expect } from '@playwright/test';

test('photography page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.getByRole('link', { name: 'Photography' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('photography-content')).toHaveText('Photography works!');
});