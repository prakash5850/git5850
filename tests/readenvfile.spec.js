
import { test, expect } from '@playwright/test';
test('readencfile', async ({ page }) => {

await page.goto(process.env.WEB_URL);
await page.locator('#username').fill(process.env.APP_USERNAME);
await page.locator('#password').fill(process.env.APP_PASSWORD);
await page.locator('#log-in').click(); 



});