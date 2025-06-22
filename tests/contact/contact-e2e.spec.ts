import { test, expect } from '@playwright/test';

test('contact page loaded via URL', async ({ page }) => {
  await page.goto('http://localhost:4200/contact');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('contact-content')).toHaveText('Contact works!');
});

test('contact page loaded', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await page.getByRole('link', { name: 'Contact Me' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByTestId('contact-content')).toHaveText('Contact works!');
});
