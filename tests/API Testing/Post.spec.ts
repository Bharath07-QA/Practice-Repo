import { test, expect, request } from "@playwright/test"

test("Post - Passing data", async({request})=>
{
    const resp1 = await request.post("/booking",{
        data:{
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
    },
            "additionalneeds" : "Breakfast"
        }
    })
    const res = await resp1.json()
    console.log(res)

    expect(resp1.status()).toBe(200)
    expect(resp1.statusText()).toBe("OK")
    expect(resp1.ok()).toBeTruthy()

    expect(res.booking).toMatchObject({
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
    },
            "additionalneeds" : "Breakfast"

    })

    expect(res.booking.totalprice).toEqual(111)

})

test("API with UI verification", async({page, request})=>
{

    
    const resp3 = await request.post("https://api.demoblaze.com/addtocart",{
        data:{
            "id":"b2ff4164-a330-810c-ca9b-e77dc36bc5ed",
            "cookie":"dGVzdDI2ODRAZ21haWwuY29tMTc0OTIzMw==",
            "prod_id":1,
            "flag":false
        }
    })
    expect(resp3.status()).toBe(200)
    await page.goto("https://demoblaze.com/index.html")
    await page.click("#login2")
    await page.fill("#loginusername","test2684@gmail.com")
    await page.fill("#loginpassword","Test@123")
    await page.click("(//div//button[@class='btn btn-primary'])[3]")
    await page.click("#cartur")
    await expect(page.locator("//td[contains(text(), 'Samsung galaxy s6')]")).toBeVisible()

})