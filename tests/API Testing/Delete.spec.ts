import{ test, expect, request} from "@playwright/test"

test("Delete call", async({request})=>{
   const delrep = await request.delete("/booking/3", {
    headers:{
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
    }
   })

   expect(delrep.statusText()).toEqual("Created")
   const deltext = await delrep.text()
   expect(deltext).toEqual("Created")
   expect(delrep.status()).toBe(201)

   const getresp = await request.get("/booking/3")

   expect(getresp.status()).toBe(404)
    
   })
