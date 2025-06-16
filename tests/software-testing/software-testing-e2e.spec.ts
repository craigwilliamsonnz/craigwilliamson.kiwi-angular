import { test, expect } from '@playwright/test';

test('software testing page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.getByRole('link', { name: 'Software Testing' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('software-testing-content')).toHaveText('Software testing works!');
});
