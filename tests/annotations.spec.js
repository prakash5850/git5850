import { test, expect } from '@playwright/test';

//only
// test.only('test1', async ({ page }) => {
//     console.log('this ismy test1')

// })

// test.only('test2', async ({ page }) => {
//     console.log("this ismy test1")

// })

// test('test3', async ({ page }) => {
//     console.log('this ismy test3')

// })

// test('test4', async ({ page }) => {
//     console.log('this ismy test4')

// })

// test('test5', async ({ page }) => {
//     console.log('this ismy test5')



// })

//skip


// test('test4', async ({ page }) => {
//     console.log('this ismy test4')

// })

// test.skip('test5', async ({ page }) => {
//     console.log('this ismy test5')
// })


    // Bases on the condition, if browers matches it should skip, if browsers does not match it should execute
    
// test('test4', async ({page, browserName }) => {
//         console.log('test4')
//     if(browserName==='chromium')

//         {
//             test.skip()
//         }

//     })


    // fixme
    
    // test('test5', async ({page }) => {

    //     console.log("tests5")

    //     test.fixme()

    // })


    // fail


    // test('test6', async ({page }) => {

    //     test.fail()

    //     console.log("tests6")

    //    expect(2).toBe(2)

    // })


    //  test('test7', async ({page }) => {

    //         test.fail()
    
    //         console.log("tests7")
    
    //        expect(2).toBe(3)
    
    //     })

        // Bases on the condition

//         test('test7', async ({page, browserName }) => {

//             console.log("tests7")

//     if(browserName==='chromium')
// {
//      test.fail()
//      }
    
       
    
//         })



//         test('test8', async ({page, browserName }) => {

//             console.log("tests8")

//     if(browserName==='firefox')
// {
//      test.fail()
//      }

//     })


// slow//

test('test10', async ({ page }) => {

    test.slow()
        console.log('this ismy test10')

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})