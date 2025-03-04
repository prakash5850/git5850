import { test, expect } from '@playwright/test';

test.only('verify logo visible', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page.locator("//img[@alt='company-branding']")).toBeVisible();




});

test('verify login with credentials', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
   await page.locator("button[type='submit']").press("Enter")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

});



test('verify login invalid,valid password', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Adminaa");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page.locator).toBeHave();

});

test('verify login valid,invalid password', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin12345");
    await page.locator("button[type='submit']").press("Enter");
    await expect(page.getByText("invalid credentials")).toBeVisible();

});


test.only('verify login invalid,invalid password', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill("Adminaa");
    await page.locator("input[type='password']").fill("admin12345");
    await page.locator("button[type='submit']").click();
    await expect(page.getByText("invalid credentials")).toBeVisible();

});