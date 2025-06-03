import {test, expect} from "@playwright/test"

test("checkbox", async({page})=>
{
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    const cb1 = page.locator(".Automation")

    await expect(cb1).not.toBeChecked()
    await cb1.check()
    await expect(cb1).toBeChecked()

    await cb1.uncheck()
    await expect(cb1).not.toBeChecked()



})