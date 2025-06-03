import {test, expect} from "@playwright/test"

test("iFrame - Name attribute", async({page})=>
{
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")
    const frame = page.frame("iframeResult")
    await frame?.fill("#fname", "Test")
})

test("iFrame - URL attribute", async({page})=>
    {
        await page.goto("https://www.w3schools.com/html/html_iframe.asp")
        const frame1 = page.frame({url: "https://www.w3schools.com/html/default.asp"})
        await frame1?.getByRole('button', { name: 'Button to open search field' }).click()
        await frame1?.getByPlaceholder("Search...").fill("Playwright Test")
    })

test("iFrame - Locator Method", async({page})=>
{
        await page.goto("https://www.w3schools.com/html/html_iframe.asp")
        const frame2 = page.frameLocator("[title='W3Schools HTML Tutorial']")
        await frame2?.getByRole('button', { name: 'Button to open search field' }).click()
        await frame2?.getByPlaceholder("Search...").fill("Playwright Test")
})