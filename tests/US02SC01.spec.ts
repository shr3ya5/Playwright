import { test, expect } from '@playwright/test';

// Define a test suite for Google Search functionality
test.describe('US02SC01:Google Search Functionality', () => {

    // Define a test case using Playwright's `page` fixture
    test('US02SC01-TC01: User can launch chrome and interact with Google search page', async ({ page }) => {

        // Step1: Go to Google Search Page
        await test.step('Navigate to Google Search Page', async () => {
            await page.goto('https://www.google.com/');
            await page.waitForLoadState('domcontentloaded');
        });

        // Step2: Verify Google logo is visible
        await test.step('Verify Google logo is visible', async () => {
            const logo = await page.locator('svg[aria-label="Google"]');
            await expect(logo).toBeVisible();
        });

        // Step3: Enter Cognizant in the search box
        await test.step('Enter Cognizant in the search box', async () => {
            const searchBox = await page.locator('textarea[name="q"]');
            const searchText = 'Cognizant';
            await searchBox.fill(searchText);
            await expect(searchBox).toHaveValue(searchText);
        });

        // Step4: Trigger search (press Enter)
        await test.step('Trigger search', async () => {
            const searchButton = await page.locator('input[name="btnK"]').first();
            await searchButton.click();
            await page.waitForLoadState('networkidle');
        });

        // Step5: Verify results are displayed, Count the results and store in a variable
        await test.step('Verify results are displayed', async () => {
            const searchResults = await page.locator('div.MjjYud');
            await expect(searchResults.first()).toBeVisible();
            const resultsCount = await searchResults.count();
            console.log(`Number of search results: ${resultsCount}`);
        });

        // Step6: Take screenshot of the search results page
        await test.step('Take screenshot', async () => {
            await page.screenshot({ path: 'Cognizant_search_results.png' });
        });
    });
});