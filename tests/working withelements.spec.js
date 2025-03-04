import { test, expect } from '@playwright/test';

test('working with check box', async ({ page }) => {

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")

    //  await page.locator('//input[@type="checkbox"]').check();
    // await expect (page.locator('//input[@type="checkbox"]')).toBeChecked();
    
    //  await page.locator('//input[@type="checkbox"]').uncheck();
    // await expect (page.locator('//input[@type="checkbox"]')).not.toBeChecked();

      const isChecked = await page.locator('//input[@type="checkbox"]').isChecked();

   

    console.log(isChecked)

    // condition 1

    // if(isChecked){

    //   const isChecked = await page.locator('//input[@type="checkbox"]').uncheck();

    // }

    //condition 2

if(!isChecked){

      const isChecked = await page.locator('//input[@type="checkbox"]').check();

    }


});



// if(isChecked){

//  await page.locator('//input[@type="checkbox"]').uncheck();

// }

// npx playwright test working withelements.spec.js --debug