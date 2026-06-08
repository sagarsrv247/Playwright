import { test, expect } from '@playwright/test';

// Verify that the Google homepage loads correctly and that the page title is valid.
// This example uses Playwright's `page` fixture to navigate and inspect browser state.
test('Verify Google title', async ({ page }) => {
  // Navigate to the target website.
  await page.goto('https://google.com');

  // Get the page title once the page has finished loading.
  const title = await page.title();

  // Assert the title contains the expected text.
  expect(title).toContain('Google');
});
