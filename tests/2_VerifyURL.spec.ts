import { test, expect } from '@playwright/test';

// This test verifies that the Google homepage loads and the browser
// is redirected to the expected Google URL.
// It demonstrates navigation, URL retrieval, and assertion.
test('Verify Google URL', async ({ page }) => {
  // Step 1: open the Google homepage.
  await page.goto('https://google.com');

  // Step 2: verify the browser is currently on the expected URL.
  await expect(page).toHaveURL('https://www.google.com/');
});

