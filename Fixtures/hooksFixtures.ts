import {test as baseTest} from "@playwright/test"

type hooksFixtures =
{
    loginlogoutfixture: any
}

export const test = baseTest.extend<hooksFixtures>
(
    {
        loginlogoutfixture : async({page}, use)=>
        {
            const loginlogoutfixture = "Printing_Fixture_Value"
            await page.goto("https://www.saucedemo.com/");
            await page.locator('[data-test="username"]').fill("standard_user");
            await page.locator('[data-test="password"]').fill("secret_sauce");
            await page.locator('[data-test="login-button"]').click();

            await use(loginlogoutfixture)

            await page.getByRole('button', { name: 'Open Menu' }).click();
            await page.getByRole('link', { name: 'Logout' }).click();
        }
    }
)

export {expect} from "@playwright/test"

