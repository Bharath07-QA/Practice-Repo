import {test, expect} from "@playwright/test"

test("fill() Method", async({page})=>
{
    // fill()
    await page.goto("https://ultimateqa.com/filling-out-forms")
    await page.fill("#et_pb_contact_name_0", "Test_Name")
    await page.fill("//textarea[@id = 'et_pb_contact_message_0']", "Test_Message")

})

test("pressSequentially() Method", async({page})=>
{
    await page.goto("https://www.google.com")
    await page.locator("//textarea[@role = 'combobox']").pressSequentially("Test Automation Engineer", {delay:100})
})

test("press() Methods", async({page})=>
    {
        await page.goto("https://www.google.com")
        await page.locator("//textarea[@role = 'combobox']").pressSequentially("Test Automation Engineers", {delay:100})
        await page.locator("//textarea[@role = 'combobox']").press("Backspace")
        await page.locator("//textarea[@role = 'combobox']").press("Control+A")
        // await page.locator("//textarea[@role = 'combobox']").press("ArrowDown+ArrowDown+ArrowDown")
        // await page.locator("//textarea[@role = 'combobox']").press("Enter")
    })