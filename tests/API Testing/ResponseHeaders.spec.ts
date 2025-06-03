import { test, expect, request } from "@playwright/test"

test("Fetch & Validate Response Headers", async({request})=>{
   const respon = await request.get("booking/1")
   const headerValue = respon.headers()
   console.log(headerValue)

   expect(headerValue.server).toEqual("Heroku")
   expect(headerValue["content-type"]).toEqual("application/json; charset=utf-8")

   console.log("*********************************************************")

   const headerarray = respon.headersArray()
   console.log(headerarray)

   console.log("*********************************************************")
   
   expect(headerarray.length).toBe(10)
   headerarray.forEach((header)=>{
    console.log(header)

   })
    
   

})