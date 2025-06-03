import {test, expect} from "@playwright/test"

test("RadioButtons", async({page})=>
{
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    const maleRadio = page.locator("#male")
    const femaleRadio = page.locator("#female")
    await maleRadio.check()
    await expect(maleRadio).toBeChecked()
    await expect(femaleRadio).not.toBeChecked()

    await femaleRadio.check()
    await expect(femaleRadio).toBeChecked()
    await expect(maleRadio).not.toBeChecked()
})