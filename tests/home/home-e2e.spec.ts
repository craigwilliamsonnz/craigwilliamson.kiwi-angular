import { test, expect } from '@playwright/test';

test('about page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  // Click the get started link.
  await page.getByRole('button', { name: 'Enter' }).click();

  await page.getByRole('link', { name: 'Home' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('home-content')).toHaveText('Home page works!');
});
