//Import required modules from the Playwright library
import { chromium, Browser, Page } from 'playwright';
import { test, expect } from '@playwright/test';

// Define a test suite for Google search functionality
test.describe('Google Search', () => {
  test('TS-01: User can launch Chrome browser and inspect elements on Google search page', async () => {

        // Set the browser as Chrome and launch the Chrome browser
        const browser: Browser = await chromium.launch({ headless: false }); // Launch Chrome browser in non-headless mode
        const context = await browser.newContext(); // Create a new browser context
        const page: Page = await context.newPage(); // Open a new page in the browser context

        await test.step('Navigate to Google Search Page', async () => {
            const URL = 'https://www.google.com/';
            await page.goto(URL); // Navigate to the specified URL
            await page.waitForLoadState('domcontentloaded'); // Wait for the page to load completely
        });

        await test.step('Verify Google logo is visible', async () => {
          const googleLogo = await page.locator('svg[aria-label="Google"]'); // Use aria-label attribute
          await expect(googleLogo).toBeVisible();
        });

        await test.step('Verify search box is visible', async () => {
          const searchBox = await page.locator('textarea[name="q"]'); // Locate the search input box by its name attribute
          await expect(searchBox).toBeVisible();
          await searchBox.pressSequentially('Playwright Testing', { delay: 100 }); // Fill the search box with a query
          await page.waitForLoadState('networkidle'); // Wait for the network to be idle after typing
        });

        await test.step('Verify search button is visible', async () => {
          const searchButton = await page.locator('input[name="btnK"]').first(); // Locate the search button by its name
          await expect(searchButton).toBeVisible();
        });
    
        await test.step('Take screenshot of Google search page', async () => {
            await page.screenshot({ path: 'google_search_page.png' });
        });

        await test.step('Close browser', async () => {
            await browser.close();
        });
  });
});