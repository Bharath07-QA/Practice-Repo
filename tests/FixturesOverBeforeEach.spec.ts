import {test, expect} from "../Fixtures/hooksFixtures"

test("Adding item to Cart verification", async ({ page, loginlogoutfixture }) => 
    {
        //Adding and Removing Items from cart
        console.log(loginlogoutfixture)
        await page.getByText("Sauce Labs Backpack").click();
        await page.locator('#add-to-cart').click();
        await page.locator(".shopping_cart_link").click();
        await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText("Sauce Labs Backpack")
        await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
    })

test("Empty Cart verification", async ({ page, loginlogoutfixture}) => 
    {
        await page.locator(".shopping_cart_link").click();
        await expect(page.locator('.inventory_item_name')).not.toBeVisible();
    })