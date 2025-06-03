import {test,expect} from "@playwright/test"

test("Drag & Drop", async({page})=>
{
    await page.goto("https://demoqa.com/droppable")
    const draggable = page.locator("#draggable")
    await page.locator("#draggable").hover()
    await page.mouse.down()
    await page.locator("(//div[@id = 'droppable'])[1]").hover()
    await page.mouse.up()
    await expect(page.locator("(//div[@id = 'droppable'])[1]")).toHaveText("Dropped!")

    await page.getByText('Drag me', { exact: true }).dragTo(page.getByLabel('Simple').locator('#droppable'), 
    {
            sourcePosition: {x:0, y:0},
            targetPosition: {x:0, y:0}
    })

})