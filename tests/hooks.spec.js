import { test, expect } from '@playwright/test';

test.beforeAll(async()=>{
    console.log("this should be print beforeAll test")

}) 

test.afterAll(async()=>{
    console.log("this should be print beforeAll test")

}) 

    test.beforeEach(()=>{
        console.log("this should be print before test")

    }) 

    test.afterEach(()=>{
        console.log("this should be print after test")
        
    }) 


test("title case 1", async () => {
    console.log("title case 1")

});

test.only("title case 2", async () => {
    console.log("title case 2")

});

test("title case 3", async () => {
    console.log("title case 3")

});


test("title case 4", async () => {
    console.log("title case 4")

});


        
               
  




