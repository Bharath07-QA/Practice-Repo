import {expect} from "@playwright/test"
import {test} from "../Fixtures/testDataFixture"

test.beforeEach(async ({page, logindata})=>
{
    // Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.uName);
    await page.getByPlaceholder('Password').fill(logindata.pwd);
    await page.getByRole('button', { name: 'Login' }) .click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})

// Parametrize multiple sets of data through FOR EACH loop

    test(`Add Candidate for Recruitment`, async ({ page, testdata }) => 
    {
        await page.getByRole('link', { name: 'Recruitment' }) .click();
        await page.locator("//div[@class='orangehrm-paper-container']/div/button").click();
        await expect(page.locator('#app')).toContainText('Add Candidate');
        await page.getByPlaceholder('First Name').fill(testdata.fName);
        await page.getByPlaceholder('Last Name').fill(testdata.lName);
        await page.getByPlaceholder('Middle Name').fill(testdata.mName);
        await page.getByPlaceholder('Type here').first().fill(testdata.email);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByText('Application Stage')).toBeVisible();
    })
