import {test as baseTest} from "@playwright/test"

type myFixture =
{
    logindata: any,
    testdata: any
}
export const test = baseTest.extend<myFixture>
(
    {
        logindata: 
        {
            uName: "Admin",
            pwd: "admin123"
        },

        testdata: 
        {
            fName: "Bharath",
            mName: "Reddy",
            lName: "Evuri",
            email: "testbharath@email.com"
        }
    }
)