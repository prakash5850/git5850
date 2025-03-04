import { test, expect } from '@playwright/test';

test('verify litle and image', async ({ page }) => {

    await page.goto('https://playwright.dev/');

     await expect(page.locator('//img[@src="img/logos/Browsers.png11"]')).toBeVisible();
     await expect(page).toHaveTitle(/Playwright/);

    // await expect.soft(page.locator('//img[@src="img/logos/Browsers.png"]')).toBeVisible();
    // await expect(page).toHaveTitle(/Playwright/);

});