import {test, expect} from "@playwright/test"

test("File Upload - 1", async({page})=>
{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles([
        "C:/Users/DHANANJAYREDDY/Downloads/dummy.pdf",
        "C:/Users/DHANANJAYREDDY/Downloads/Untitled-1-1743607524249.jpg"
    ])
    // await page.locator("#filesToUpload").setInputFiles([]) // Removes all the previously uploaded files.
})

test ("File Upload - 2", async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const fileChooserPromise = page.waitForEvent("filechooser")
    await page.locator("#drag-drop-upload").click()
    const fileChooserResolved = await fileChooserPromise
    await fileChooserResolved.setFiles("C:/Users/DHANANJAYREDDY/Downloads/dummy.pdf")
})