import { test } from "@playwright/test";
import fs from "fs"
import {parse} from "csv-parse/sync"

const records = parse(fs.readFileSync("Test_Data/testdata.csv"),
{
    columns: true,
    skip_empty_lines: true,
})

for(const data of records)
{
    test(`Get Data from CSV ${data.ID}` , async ({ page }) => 
    {
        // console.log(records)
        await page.goto("https://demoqa.com/automation-practice-form")
        await page.getByPlaceholder('First Name').fill(data.FirstName)
        await page.getByPlaceholder('Last Name').fill(data.LastName)
    })
}
