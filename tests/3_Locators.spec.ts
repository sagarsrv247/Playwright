import {test, expect, Locator} from '@playwright/test';

test("Verify Playwright locators", async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    /*
   // Ensure the page has finished loading network activity before locating elements.
   await page.waitForLoadState('networkidle');
   
   // page.getByAltText - identifies images by its alt text attribute.
   // Use this locator when the element supports an alt text attribute such as img or area.
   const logo: Locator = page.getByAltText('nopCommerce demo store');
   await expect(logo).toBeVisible();

   */

   // page.getByText - identifies visible elements by their text content.
   // Use this locator for non-interactive page text such as headings or paragraphs.
   const text: Locator = page.getByText('Automation Testing Practice');
   await expect(text).toBeVisible();

   //For case insensitive search, you can use a regular expression with the i flag.

   const text2: Locator = page.getByText(/^automation testing Practice$/i);
   await expect(text).toBeVisible();


   // page.getByLabel - Locating elements by label text. Use this locator for form controls such as input, select, and textarea.
   // On this page the labels are not correctly linked to the input controls (all use for="textbox"),
   // so use placeholders or direct IDs instead.
   await page.getByPlaceholder('Enter Name').fill('John');
   await page.getByPlaceholder('Enter EMail').fill('abc@xyz.com');
   await page.getByPlaceholder('Enter Phone').fill('122414424');

   // page.getByRole - Locating elements by role(role is not an attribute)
   /*Role locators include the following roles: button, checkbox, combobox, dialog, grid, link, listbox, menuitem, progressbar, radio, scrollbar, searchbox, slider, spinbutton, tab, textbox and treeitem.
   and many more roles are available. You can find the complete list of roles in the WAI-ARIA specification
   Prefer for interactive elements such as buttons, links, and form controls.*/

   await page.getByRole("link",{name : 'Udemy Courses'}).click();

   //we can use getbyrole for non interactive elements as well. For example, headings, paragraphs, and images. In this case, we can use the getByRole method to locate a heading element with the name "Join Our Next Batch".   

   await expect(page.getByRole("heading", {name : 'Join Our Next Batch'})).toBeVisible();
   

   //page.getByPlaceholder - Locating elements by placeholder text. Use this locator for form controls such as input and textarea. The placeholder text is the visible text that appears inside the form control when it is empty.
   

    //page.getByTitle - Locating elements by title attribute. Use this locator for any element that has a title attribute. The title attribute is the visible text that appears when the user hovers over the element.

   await expect(page.getByTitle('Automation Testing Practice')).toBeVisible();

   //page.getByTestId - Locating elements by test id attribute. Use this locator for any element that has a data-testid attribute. The data-testid attribute is a custom attribute that you can add to your HTML elements to make them easier to locate in your tests.
    
   //testid is rarely used in real world applications, but it is a good practice to use it for testing purposes. It is a good practice to use testid for elements that are not easily locatable by other means, such as elements that do not have a unique id or class name.

});

