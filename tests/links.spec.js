import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {

    await page.goto('https://trello.com/');
    // await page.click("//a[text()='Log in']");

    // await page.getByTestId('username').fill("prakash.bangaram12@gmail.com");

    await expect(page.locator("//a")).toHaveCount();


});