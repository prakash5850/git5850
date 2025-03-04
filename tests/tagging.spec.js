
import { test, expect } from '@playwright/test';


test('test1@smoke', async ({ page }) => {
    console.log('this ismy test1')

})

test('test2@smoke', async ({ page }) => {
    console.log("this ismy test1")

})

test('test3@sanity', async ({ page }) => {
    console.log('this ismy test3')

})

test('test4@regression@sanity@smoke', async ({ page }) => {
    console.log('this ismy test4')

})

test('test5@smoke@regression', async ({ page }) => {
    console.log('this ismy test5')



})
    
    


