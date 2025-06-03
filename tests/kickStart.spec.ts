import {chromium, test} from "@playwright/test"

// const browser = await chromium.launch()
// const context = await browser.newContext()
// const page = await context.newPage()

test("Test Script 1", async({page})=>
{
    await page.goto("https://xds-spark-dev-6a63a.web.app")
    console.log("Test case 1")
    console.log("Test case 2")
})

test("Test Script 2", ()=>
{
    console.log("Test case 3")
    console.log("Test case 4")
})