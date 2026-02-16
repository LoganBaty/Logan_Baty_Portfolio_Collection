import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.locator('app-housing-location').filter({ hasText: 'Acme Fresh Start' }).getByRole('link').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Logan');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Baty');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('lb@mail.com');
  await page.getByRole('button', { name: 'Apply now' }).click();
});