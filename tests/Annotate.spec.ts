import { test, expect } from "@playwright/test";

test("Annotate Test Practice Test 1",
    {
        annotation:
        {
            type:"Jira Story",
            description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
        }
    }, async ({ page }) => 
        {
            await page.goto("https://www.google.com");
            await expect(page).toHaveTitle("Google");   
        })

test("Annotate Test Practice Test 2",
    {
        tag: "@UI",
        annotation:
        [
            {
                type: "Google Title Verification",
                description: "we're verifying the page title"
            },
            {
                type: "Jira Story",
                description: "https://wishinfinite1.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?selectedIssue=SCRUM-1"
            }
        ]
    }, async({page})=>
    {
        await page.goto("https://www.google.com");
        await expect(page).toHaveTitle("Google");
    })