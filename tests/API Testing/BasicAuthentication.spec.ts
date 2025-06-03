import { test, expect, request} from "@playwright/test"

let tokenValue: string
// Generating the token value
test.beforeAll("Basic Authentication", async({request})=>{
    const authresp = await request.post("/auth",{
        data:{
            "username": "admin",
            "password": "password123"
        }
    })
    console.log(authresp)
    const authjson = await authresp.json()
    console.log(authjson)
    expect(authresp.status()).toBe(200)
    expect(authresp.statusText()).toEqual("OK")

    // tokenValue = (await authresp.json()).token
    tokenValue = authjson.token
    console.log(tokenValue)
})

// Passing the generated token value in the calls

test("Put call with Token", async({request})=>{
    const putresponse = await request.put("/booking/2",{
        headers:{
            "Cookie": `token=${tokenValue}`
        },
        data:{
            "firstname" : "Wanda",
            "lastname" : "Vison",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
    },
            "additionalneeds" : "Breakfast"
        }
    })

    // Asserting
    expect(putresponse.status()).toBe(200)
    const jsonrep = await putresponse.json()
    console.log(jsonrep)

    expect(jsonrep).toMatchObject({
        "firstname" : "Wanda",
        "lastname" : "Vison",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
        "additionalneeds" : "Breakfast"
    })
})

