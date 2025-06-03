import {test, expect} from "@playwright/test"
import testdata from "../Test_Data/testData1.json"
import logindata from "../Test_Data/loginData.json"
test.beforeEach(async ({page})=>
{
    // Login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.getByPlaceholder('Username').fill(logindata.userName);
    await page.getByPlaceholder('Password').fill(logindata.passWord);
    await page.getByRole('button', { name: 'Login' }) .click();
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})

test("Verify timesheet card navigation on Dashboard page", async ({ page, context }) => 
{
    await expect(page.locator('#app')).toContainText('Quick Launch');
    await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
    await page.getByRole('link', { name: 'Time' }).click();
    await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
})

// Parametrize multiple sets of data through FOR EACH loop
testdata.forEach((data)=>
{
    test(`Add Candidate for Recruitment ${data.fName}` , async ({ page }) => 
    {
        await page.getByRole('link', { name: 'Recruitment' }) .click();
        await page.locator("//div[@class='orangehrm-paper-container']/div/button").click();
        await expect(page.locator('#app')).toContainText('Add Candidate');
        await page.getByPlaceholder('First Name').fill(data.fName);
        await page.getByPlaceholder('Last Name').fill(data.lName);
        await page.getByPlaceholder('Middle Name').fill(data.mName);
        await page.getByPlaceholder('Type here').first().fill(data.email);
        await page.getByRole('button', { name: 'Save' }).click();
        await expect(page.getByText('Application Stage')).toBeVisible();
    })
})

// Parametrize multiple sets of data through FOR OF loop
// for(const data of testdata)
// {
//     test(`Add Candidate for Recruitment ${data.fName}` , async ({ page }) => 
//     {
//         await page.getByRole('link', { name: 'Recruitment' }) .click();
//         await page.locator("//div[@class='orangehrm-paper-container']/div/button").click();
//         await expect(page.locator('#app')).toContainText('Add Candidate');
//         await page.getByPlaceholder('First Name').fill(data.fName);
//         await page.getByPlaceholder('Last Name').fill(data.lName);
//         await page.getByPlaceholder('Middle Name').fill(data.mName);
//         await page.getByPlaceholder('Type here').first().fill(data.email);
//         await page.getByRole('button', { name: 'Save' }).click();
//         await expect(page.getByText('Application Stage')).toBeVisible();
//     })
// }
    
