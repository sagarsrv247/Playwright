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

//this is my first Playwright test. I'm new to playwright. I want to learn how to write tests using Playwright. I will start with a simple test that verifies the title of the Google homepage. I will use the 'test' function from Playwright to define my test, and I will use the 'expect' function to make assertions about the title. I will also use the 'page' fixture to interact with the browser..