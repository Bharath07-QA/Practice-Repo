import {test} from "@playwright/test"

test.describe("Admin Test Cases", async()=>
{
    test("Test 1", async({page})=>
    {
        console.log("Starting Test 1")
        console.log("Ending Test 1")
    })
        
    test("Test 2", async({page})=>
    {
        console.log("Starting Test 2")
        console.log("Ending Test 2")
    })
    
    test("Test 3", async({page})=>
    {
        console.log("Starting Test 3")
        console.log("Ending Test 3")
    })
})

test.only("Test 4", async({page})=>
{
    console.log("Starting Test 4")
    console.log("Ending Test 4")
})

test.skip("Test 5", async({page})=>
{
    console.log("Starting Test 5")
    console.log("Ending Test 5")
})

test("Test 6", async({page, browserName})=>
{
    test.skip(browserName==='firefox')
    console.log("Starting Test 6")
    console.log("Ending Test 6")
})

test("Test 7", async({page, browserName})=>
{
    test.slow()
    // test.slow(browserName==='chromium')
    console.log("Starting Test 7")
    console.log("Ending Test 7")
})