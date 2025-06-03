import { test, request, expect } from "@playwright/test"

test("Put call", async({request})=>{
    const putresp = await request.put("/booking/2",{
        headers:{
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            "firstname" : "Sherlock",
            "lastname" : "Holmes",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
    },
            "additionalneeds" : "Breakfast"
        }
        
    })

    const jsonresp = await putresp.json()
    console.log(jsonresp)

    expect(putresp.status()).toBe(200)
    expect(putresp.statusText()).toEqual("OK")
    expect(putresp.ok()).toBeTruthy()

    expect(jsonresp).toMatchObject({
        firstname: 'Sherlock',
        lastname: 'Holmes',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
})
    expect(jsonresp.additionalneeds).toEqual("Breakfast")

    // Calling Get method just to cross verify whether the modifed data has been updated as expected or not
    const getresp = await request.get("/booking/2")
    const getjsonresp = await getresp.json()

    console.log(getjsonresp)

    expect(getjsonresp).toMatchObject({
        firstname: 'Sherlock',
        lastname: 'Holmes',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })
    })

    