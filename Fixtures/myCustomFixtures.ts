import {test as baseTest} from "@playwright/test"

type myFixtures = 
{
    fixture1: any;
}

export const test = baseTest.extend<myFixtures>
(
    {
        fixture1: async ({}, use) =>
        {
            const fixture1 = "I'm Fixture 1"
            console.log("Before part of Fixture 1")
            await use(fixture1)
            console.log("After part of Fixture 1")
        }
    }

) 
