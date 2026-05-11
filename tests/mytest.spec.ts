import {test,expect} from '@playwright/test';

/*
test("title", () => {
//step 1
//step 2
// step 3
})
*/

//fixture - global variable : page, browser


test("Verify Google title", async ({page}) => {
    

    await page.goto('https://google.com');
    const title = await page.title();
    expect(title).toContain('Google');


})

//this is 11nth May Branch.