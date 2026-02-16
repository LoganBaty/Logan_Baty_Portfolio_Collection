import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.locator('app-home')).toMatchAriaSnapshot(`
    - textbox "Filter by city"
    - button "Search"
    - img "Exterior photo of Acme Fresh Start Housing"
    - heading "Acme Fresh Start Housing" [level=2]
    - paragraph: Chicago, IL
    - link "Learn More›":
      - /url: /details/0
    - img "Exterior photo of A113 Transitional Housing"
    - heading "A113 Transitional Housing" [level=2]
    - paragraph: Santa Monica, CA
    - link "Learn More›":
      - /url: /details/1
    - img "Exterior photo of Warm Beds Housing Support"
    - heading "Warm Beds Housing Support" [level=2]
    - paragraph: Juneau, AK
    - link "Learn More›":
      - /url: /details/2
    - img "Exterior photo of Homesteady Housing"
    - heading "Homesteady Housing" [level=2]
    - paragraph: Chicago, IL
    - link "Learn More›":
      - /url: /details/3
    - img "Exterior photo of Happy Homes Group"
    - heading "Happy Homes Group" [level=2]
    - paragraph: Gary, IN
    - link "Learn More›":
      - /url: /details/4
    - img "Exterior photo of Hopeful Apartment Group"
    - heading "Hopeful Apartment Group" [level=2]
    - paragraph: Oakland, CA
    - link "Learn More›":
      - /url: /details/5
    - img "Exterior photo of Seriously Safe Towns"
    - heading "Seriously Safe Towns" [level=2]
    - paragraph: Oakland, CA
    - link "Learn More›":
      - /url: /details/6
    - img "Exterior photo of Hopeful Housing Solutions"
    - heading "Hopeful Housing Solutions" [level=2]
    - paragraph: Oakland, CA
    - link "Learn More›":
      - /url: /details/7
    - img "Exterior photo of Seriously Safe Towns"
    - heading "Seriously Safe Towns" [level=2]
    - paragraph: Oakland, CA
    - link "Learn More›":
      - /url: /details/8
    - img "Exterior photo of Capital Safe Towns"
    - heading "Capital Safe Towns" [level=2]
    - paragraph: Portland, OR
    - link "Learn More›":
      - /url: /details/9
    `);
  await page.getByRole('heading', { name: 'Seriously Safe Towns' }).nth(1).click();
  await page.locator('app-housing-location:nth-child(9) > .listing > a').click();
  await expect(page.getByText('Units available: 10')).toContainText('Units available: 10');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Chon');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Bebe');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('Chbe@mail.com');
  await page.getByRole('button', { name: 'Apply now' }).click();
  await page.getByText('First Name: Chon').click();
  await page.getByRole('button', { name: 'Return to Home' }).click();
  await page.locator('app-housing-location').filter({ hasText: 'Happy Homes GroupGary,' }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Happy Homes Group' })).toContainText('Happy Homes Group');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Chon');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Bebe');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('chbe@mail.com');
  await page.getByRole('button', { name: 'Apply now' }).click();
  await page.getByText('Email: chbe@mail.com').click();
  await page.getByRole('button', { name: 'Return to Home' }).click();
});