import { test, expect } from '@playwright/test';
//import { startServices, stopServices } from './startServices';

test.describe('test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
    });

    test('test', async ({ page }) => {
    // await page.goto('http://localhost:4200/');
        await expect(page).toHaveURL('http://localhost:4200/');
        await page.getByRole('textbox', { name: 'Filter by city' }).click();
        await page.getByRole('textbox', { name: 'Filter by city' }).fill('chi');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('link', { name: 'Learn More›' }).nth(1).click();
        await expect(page.getByRole('textbox', { name: 'First Name' })).toContainText('');
        await page.getByRole('textbox', { name: 'First Name' }).click();
        await page.getByRole('textbox', { name: 'First Name' }).fill('Jerry');
        await expect(page.getByRole('textbox', { name: 'Last Name' })).toContainText('');
        await page.getByRole('textbox', { name: 'Last Name' }).click();
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Seinfield');
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill('jSeinfield@mail.com');
        await page.getByRole('button', { name: 'Apply now' }).click();
        await expect(page.locator('.dialog-heading')).toContainText('Thank you for applying!');   // took out ", { name: 'Thank you for applying!' }"
        await expect(page.locator('.modal-content li').nth(0)).toContainText('First Name: Jerry');
        await expect(page.locator('.modal-content li').nth(1)).toContainText('Last Name: Seinfield');
        await expect(page.locator('.modal-content li').nth(2)).toContainText('jSeinfield@mail.com');
        await page.getByRole('button', { name: 'Return to Home' }).click();
        await expect(page).toHaveURL('http://localhost:4200/');
    });

    test('dialogTest', async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.locator('app-housing-location').filter({ hasText: 'Acme Fresh Start' }).getByRole('link').click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Don');
    await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Toliver');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('dT@mail.org');
    await page.getByRole('button', { name: 'Apply now' }).click();
    await expect(page.locator('.dialog-heading')).toContainText('Thank you for applying!');   // took out ", { name: 'Thank you for applying!' }"
    await expect(page.locator('.modal-content li').nth(0)).toContainText('First Name: Don');
    await expect(page.locator('.modal-content li').nth(1)).toContainText('Last Name: Toliver');
    await expect(page.locator('.modal-content li').nth(2)).toContainText('Email: dT@mail.org');
    await page.getByRole('button', { name: 'Return to Home' }).click();
    await expect(page).toHaveURL('http://localhost:4200/');
    });

});

