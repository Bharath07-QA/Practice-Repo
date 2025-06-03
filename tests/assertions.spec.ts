import {expect, test} from "@playwright/test"

test("Auto Retrying Assertions", async({page})=>
{
    await page.goto("https://www.saucedemo.com")
    await expect.soft(page.locator("[data-test='login-button']")).toBeDisabled()
    await expect(page).toHaveURL("https://www.saucedemo.com")
    console.log("Test Pass")
    await expect(page, "This is custom error text: Assertion Timed out").not.toHaveTitle("Swag Labss")
    
})