import { test, expect } from '@playwright/test';



// test.describe("verify the login functionality", async () => {

// })
// test.describe("group 1", async () => {

// })

// test("title case 1", async () => {
//     console.log("title case 1")

// });
// test.describe("group 2", async () => {

// })
// test("title case 2", async () => {
//     console.log("title case 2")

// });

// test("title case 3", async () => {

//     test.fixme()
//     console.log("title case 3")

   

// });


// test("title case 4", async () => {

//     test.fixme()
//     console.log("title case 4")

// });
////////////////////////////////////////////////////////////////////////////////////////

test.describe.only('group1', async () => {

    
test('test1', async ({ page }) => {


    console.log('this ismy test1')

})

test('test2', async ({ page }) => {

 
    console.log("this ismy test1")

})
})
    

test.describe('group2', async () => {



test('test3', async ({ page }) => {
    console.log('this ismy test3')

})

test('test4', async ({ page }) => {
    console.log('this ismy test4')

})

test('test5', async ({ page }) => {

 
    console.log('this ismy test5')

})
})







