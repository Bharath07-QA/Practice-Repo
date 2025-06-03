import {test, expect} from "@playwright/test"

test("Locattors-1", async({page})=>
{
    await page.goto("https://www.saucedemo.com")
    await page.locator("//*[@placeholder = 'Username']").fill("standard_user") // xpath
    await page.locator("input#password").fill("secret_sauce") // #password (css selector by id value)
    await page.click("input.submit-button") // .submit-button (cc seelctor by class value), input[type = submit] (css selector by attribute name and value), [type = submit]
    await page.locator("text='Sauce Labs Backpack'").click();
    await page.locator("id=add-to-cart").click()
})

test("Locators-2", async({page})=>
{
    await page.goto("https://www.saucedemo.com")
    await page.locator("div.form_group", { has: page.locator("input#user-name") }).click()
    await page.locator("div.form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user")

    await page.locator("div.form_group", { hasNot: page.locator("input#user-name") }).click()
    await page.locator("div.form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce")

    await page.click("input.submit-button")

    // await page.locator("//a", {hasText: "Sauce Labs Backpack" }).click();
    await page.locator(".inventory_item_name ", {hasNotText: /Sauce.*/ }).click();

    await page.locator("id=add-to-cart").click()
})

test ("GetByMethods", async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/login")
    await page.getByLabel("Email:", {exact:true}).fill("test@gmail.com")
          page.getByText("New Customer", {exact:true})
    await page.getByAltText("nopCommerce demo store").click()
    await page.getByTitle("Show products in category Electronics").first().click()
    await page.getByPlaceholder("Search store").fill("Test")
    await page.getByRole("button", {name:"Search"}).click()
    
})

