import {test, expect} from "@playwright/test"

test("Select Dropdown_1", async({page})=>
{
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    await page.locator("#testingDropdown").selectOption("Database Testing") // Visible Text
    await page.locator("#testingDropdown").selectOption("Manual") // Value
    await page.locator("#testingDropdown").selectOption({value: "Performance"}) // Attribute
    await page.locator("#testingDropdown").selectOption({label: "Automation Testing"})
    await page.locator("#testingDropdown").selectOption({index: 2}) // Index
})

test("Select Drowdown_2", async({page})=>
{
    // Web element containing label attribute
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label")
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:').selectOption("Audi") // Label
})

test("MultiSelect", async({page})=>
{
    await page.goto("https://demoqa.com/select-menu")
    // await page.locator("#cars").selectOption('Opel') // Selecting single element from a multiselect dropdown
    // await page.locator("#cars").selectOption(['volvo', 'Opel']) // Selecting multiple elements from a multiselect dropdown

    await page.locator("//div[text() ='Select...']").click()
    await page.getByText("Blue").last().click()   
})