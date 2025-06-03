import { test, request, expect, APIRequestContext} from "@playwright/test"

let reqconst1: APIRequestContext
test.beforeAll("Get call with Before Each", async()=>
{
    reqconst1 = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders:
    {
        "Accept": "appliaction/json"
    }
    })
})

// test("Get call Request through Http Method", async ({request})=>
// {
//    const res1 = await request.get("https://restful-booker.herokuapp.com/booking",
//     {
//         headers:
//         {
//             "Accept": "application/json",
//         }
//     }
//    )
//    console.log(await res1.json())
// })

// test("Get call Request through Context", async ()=>
// {
//     const reqcontext = await request.newContext
//     (
//         {
//             baseURL: "https://restful-booker.herokuapp.com",
//             extraHTTPHeaders:
//             {
//                 "Accept": "application/json"
//             }
//         }
//     )
//    const res1 = await reqcontext.get("/booking/1")
//    console.log(await res1.json())
// })

// test("Get call Request through Context1", async ()=>
// {
//    const res1 = await reqconst1.get("/booking")
//    console.log(await res1.json())
// })

test("Get call Request - Query Parameter", async ()=>
{
    const reqcontext = await request.newContext({
            baseURL: "https://restful-booker.herokuapp.com/booking/",
            extraHTTPHeaders:{
                "Accept": "application/json"
            }
        }
    )
//  const res1 = await reqcontext.get("/booking?firstname=John&lastname=Smith")
    const res1 = await reqcontext.get("/booking",{
        params:{
            "firstname": "John",
            "lastname": "Smith"
        }
    })
    console.log(await res1.json())
})
 
// Assertion

test("Get call Request - Assertion", async ()=>{
    const reqcontext = await request.newContext({
            baseURL: "https://restful-booker.herokuapp.com",
            extraHTTPHeaders:{
                "Accept": "application/json"
            }
        }
    ) 
   const res1 = await reqcontext.get("/booking/1")
   console.log(await res1.json())
   expect(res1.status()).toBe(200)
   expect(res1.ok()).toBeTruthy()
   expect(await res1.json()).toMatchObject({
    firstname: 'Susan',
    lastname: 'Ericsson',
    totalprice: 994,
    depositpaid: true,
    bookingdates: { checkin: '2023-03-18', checkout: '2023-12-01' },
    additionalneeds: 'Breakfast'
   })
   const jsonresp = await res1.json()
   expect(jsonresp.firstname).toEqual("Susan")
})

// API with UI verification

test("API with UI verification", async({ request, page })=>
{
    
    const resp = await request.get("https://api.demoblaze.com/entries")
    // console.log(await resp.json())
    const resp2 = await resp.json()
    console.log(resp2.Items[0].title)
    let title = (resp2.Items[0].title)
    await page.goto("https://demoblaze.com/")
    
    await expect(page.getByRole('link', { name: 'Samsung galaxy s6'})).toHaveText(title)
})