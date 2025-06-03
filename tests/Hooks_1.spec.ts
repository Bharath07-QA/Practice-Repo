import {test, expect, Page} from "@playwright/test"

// beforeEach & afterEach

test.beforeEach("Login", async({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
})

test.afterEach("Logout", async({page})=>
    {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    })

test("Adding item to Cart verification", async ({ page }) => 
    {
        //Adding and Removing Items from cart
        await page.getByText("Sauce Labs Backpack").click();
        await page.locator('#add-to-cart').click();
        await page.locator(".shopping_cart_link").click();
        await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
    })

test("Empty Cart verification", async ({ page }) => 
    {
        await page.locator(".shopping_cart_link").click();
        await expect(page.locator('.inventory_item_name')).not.toBeVisible();
    })

// beforeAll & afterAll

// let page:Page; // "The variable page should be of type Page." The Page type comes from Playwright and represents a single browser tab or page instance.So this line creates a variable to hold a Playwright browser page, but does not initialize it yet.
// test.beforeAll(async({browser})=>  // Receives the browser fixture from Playwright. Uses it to create a new browser page (tab).
//     {
//         page = await browser.newPage(); // Tells Playwright to open a new browser tab.
//         // Login
//         await page.goto("https://www.saucedemo.com/");
//         await page.locator('[data-test="username"]').fill("standard_user");
//         await page.locator('[data-test="password"]').fill("secret_sauce");
//         await page.locator('[data-test="login-button"]').click();
//     })
    
// test.afterAll(async({})=>
//     {
//         // Logout
//         await page.getByRole('button', { name: 'Open Menu' }).click();
//         await page.getByRole('link', { name: 'Logout' }).click();
//     })
    
// test("Adding item to Cart verification1", async ({}) => 
//     {
//         //Adding and Removing Items from cart
//         await page.getByText("Sauce Labs Backpack").click();
//         await page.locator('#add-to-cart').click();
//         await page.locator(".shopping_cart_link").click();
//         await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
//         await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
//         await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
//         await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
//     })
    
// test("Empty Cart verification1", async ({}) => 
//     {
//         await page.locator(".shopping_cart_link").click();
//         await expect(page.locator('.inventory_item_name')).not.toBeVisible();
//     })