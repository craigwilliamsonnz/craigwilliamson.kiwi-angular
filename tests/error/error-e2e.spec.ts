import { test, expect } from '@playwright/test';

test('error page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/error');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('error-content')).toHaveText('Error page works!');
});
