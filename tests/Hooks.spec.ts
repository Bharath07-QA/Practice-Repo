import {test, expect} from "@playwright/test"

test.beforeEach("Practice of beforeEach", async() =>
    {
        await console.log("Executing beforeEach block") // The code written in this beforeEach block gets executed before execution of each test
    })

test.afterEach("Practice of afterEach", async() =>
    {
        await console.log("Executing afterEach block") // The code written in this afterEach block gets executed after execution of each test
    })

test.beforeAll("Practice of beforeAll", async() =>
    {
        await console.log("Executing beforeAll block") // The code written in this beforeAll block gets executed only once before executing all the tests
    })

test.afterAll("Practice of afterAll", async() =>
    {
        await console.log("Executing afterAll block") // The code written in this afterAll block gets executed only once after executing all the tests
    })
        

test("Practice Test 1", async ({ page }) => 
    {
        console.log("Starting Practice Test 1");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 1");
    })
    
test("Practice Test 2", async ({ page }) => 
    {
        console.log("Starting Practice Test 2");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 2");
    })

test("Practice Test 3", async ({ page }) => 
    {
        console.log("Starting Practice Test 3");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 3");
    })

test.describe("Practice of Describe", async () => 
    {
        test("Practice Test 4", async ({ page, browserName }) => 
            {
                console.log("Starting Practice Test 4");
                await page.goto("https://www.saucedemo.com/");
                console.log(await page.title());
                console.log("Ending Practice Test 4");
            })
        
        test("Practice Test 5", async ({ page, browserName }) => 
            {
                console.log("Starting Practice Test5");
                await page.goto("https://www.saucedemo.com/");
                console.log(await page.title());
                console.log("Ending Practice Test 5");
            })

        test("Practice Test 6", async ({ page }) => 
            {
                console.log("Starting Practice Test 6");
                await page.goto("https://www.saucedemo.com/");
                console.log(await page.title());
                console.log("Ending Practice Test 6"); 
                })
    })

test("Practice Test 7", async ({ page }) => 
    {
        console.log("Starting Practice Test 6");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 6");
    })