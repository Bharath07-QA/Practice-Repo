import {test,expect} from "@playwright/test"
test('UI', async({page}) => {
await page.goto("https://demo.automationtesting.in/Register.html")
const upload = await page.locator("#imagesrc")
await upload.click()

await upload.setInputFiles("C:/Users/DHANANJAYREDDY/OneDrive/Pictures/WhatsApp Image 2023-03-27 at 17.19.21.jpg",)

await page.waitForTimeout(5000)
await page.close()
})

test('UPfiles', async({page})=> {

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
const upf = await page.locator("#filesToUpload")
await upf.click()

await upf.setInputFiles(
    ["C:/Users/DHANANJAYREDDY/OneDrive/Pictures/WhatsApp Image 2023-03-27 at 17.19.21.jpg",
    "C:/Users/DHANANJAYREDDY/OneDrive/Pictures/ss4.png"])

await upf.setInputFiles([])


})

