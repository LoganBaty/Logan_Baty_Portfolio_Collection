import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByRole('textbox', { name: 'Filter by city' }).click();
  await page.getByRole('textbox', { name: 'Filter by city' }).fill('santa');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Learn More›' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Joe');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Shmoe');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('joes@mail.com');
  await page.getByRole('button', { name: 'Apply now' }).click();
});