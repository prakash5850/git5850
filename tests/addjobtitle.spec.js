

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://playwright.dev/');

});


test('verify user can add job title', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("input[name='username']").fill("Admin");
await page.locator("input[type='password']").fill("admin123");
await page.locator("button[type='submit']").click();
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

await page.locator("//span[text()='Admin']").click();
await page.locator("//span[normalize-space(text())='Job']").click();
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[1]").click();
await page.locator("//button[contains(@class,'oxd-button oxd-button--medium')]").click();

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle");

let tt = (Math.random() + 1).toString(36).substring(7);
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("lala"+tt);
await page.locator("(//textarea[contains(@class,'oxd-textarea oxd-textarea--active')])[1]").fill("god");

await page.locator("//textarea[@placeholder='Add note']").fill("Hiljjjl");
await page.locator("//button[@type='submit']").click();

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")



});
