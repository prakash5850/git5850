import { test, expect } from '@playwright/test';

test('working with dropdown', async ({ page }) => {


await page.goto("https://register.rediff.com/register/register.php?FormName=user_details")



//1. based on text

// await page.locator('#country').selectOption("Angola");

// //   or
// await page.locator('#country').selectOption({label:"Angola"});


// based on Value
// await page.locator('#country').selectOption({value:"5"});
// await page.locator('#country').selectOption("5");

// Based on index
// await page.locator('#country').selectOption({index:5});
//   howmany dropdown value are 
const options = await page.$$('#country>option')
console.log(options.length)

// const dropdown = page.locator('#country');
// // Get all elements within dropdown

// const options = await dropdown.locator('option').allTextContents();
// console.log(options)

});
