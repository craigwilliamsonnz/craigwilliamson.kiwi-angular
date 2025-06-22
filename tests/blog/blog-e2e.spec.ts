import { test, expect } from '@playwright/test';

test('blog page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/blog');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('blog-content')).toHaveText('Blogging works');
});

test('blog page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Craig\'s Blog' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('blog-content')).toHaveText('Blogging works');
});