import { test, expect, request } from "@playwright/test"
import apijson from "../../Test_Data/apidata.json"

test("Pass request body from Json - Post call", async({request})=>
{
    const prep = await request.post("/booking",{
        data: apijson.postcalldata
    })

    const jsonres = await prep.json()
    console.log(jsonres)
    expect(jsonres.booking).toMatchObject(apijson.postcalldata)
    expect(jsonres.booking.additionalneeds).toEqual(apijson.postcalldata.additionalneeds)
})

test("Pass request body from Json - Put call", async({request})=>
{
    const putr = await request.put("/booking/1",{
        headers:{
            "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: apijson.putcalldata
    })

    const jsonputres = await putr.json()
    console.log(jsonputres)
    expect(jsonputres).toMatchObject(apijson.putcalldata)
    expect(jsonputres.firstname).toEqual(apijson.putcalldata.firstname)

})