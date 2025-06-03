import {test,expect} from "@playwright/test";
import exp from "constants";

test.only("Visual Testing Verification",async({page})=>
    {
        await page.goto("https://xds-spark-dev-6a63a.web.app/login");
        await page.waitForLoadState('networkidle');
        // Captures screenshot only for the visible page

        // await expect(page).toHaveScreenshot()
        // await expect(page).toHaveScreenshot("Custom-Visual-Testing.png")
        // await expect(page).toHaveScreenshot(["ChildFolder1", "LoginPage.png"])
        // await expect(page).toHaveScreenshot(["ChildFolder2", "subFolder", "LoginPageImage.png"])

        //Captures screenshot for the entire page

        // await expect(page).toHaveScreenshot("Fullpagesnap.png", {fullPage: true})
        // await expect(page).toHaveScreenshot('MaxDiffPixel.png', {maxDiffPixels:800}) // If there's a difference between actual and expected screenshots, the difference can be ignored till 800 pixels.
        // await expect(page).toHaveScreenshot('MaxDiffPixelRatio.png', {maxDiffPixelRatio:0.60}) // Ratio lies between 0 & 1
        // await expect(page).toHaveScreenshot('Mask.png', {mask: [page.locator("//button[1]"), page.locator("//button[@type='submit']")]})

        // Apart from the entire page, we can also capture the snapshot of a specific locator

        await expect(page.locator(".w-full.space-y-6.my-5")).toHaveScreenshot("locatorsnapshot.png")

        // Also pweform the visualization on mobile devices also. For this configure the mobile devices list in the config file

    })


test("Non Image ScreenShot", async({page})=>
    {
        await page.goto("https://playwright.dev")
        expect(await page.locator(".hero__title.heroTitle_ohkl").textContent()).toMatchSnapshot("headingSnapshot.txt")
    })

test("Visual Tesing Multiple Pages", async({page})=>
    {
        await page.goto('https://www.saucedemo.com/')
        //Login Page
        await expect(page).toHaveScreenshot("LoginPage.png", {fullPage: true})
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click()

        //Landing Page
        await expect(page).toHaveScreenshot("LandingPage.png", {fullPage: true})
        await page.locator('[data-test="shopping-cart-link"]').click()

        //Cart Page
        await expect(page).toHaveScreenshot("CartPage.png", {fullPage: true})
    })