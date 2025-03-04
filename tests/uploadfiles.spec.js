import { test, expect } from '@playwright/test';

test('upload files', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/');


// await page.locator('#file-upload').setInputFiles('./testData/files/5P672626.JPG');

// await page.locator("#file-submit").click();

// await page.waitForTimeout(10000);

});
// https://blueimp.github.io/jQuery-File-Upload/

// test('multiple upload files', async ({ page }) => {
    
// await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

// await page.locator('input[type="file"]').setInputFiles(['./testData/files/5P672626.JPG','./testData/files/Capture.PNG']);

// // await expect(page.locator('p.name').nth(0)).toHaveText('5P672626.JPG');

// // await expect(page.locator('p.name').nth(0)).toHaveText('testData\files\Capture.PNG');
// //await page.locator('input[type="submit"]').click();

// await page.waitForTimeout(10000);

// });