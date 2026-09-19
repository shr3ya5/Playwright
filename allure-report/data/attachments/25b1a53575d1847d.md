# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: US02SC01.spec.ts >> US02SC01:Google Search Functionality >> US02SC01-TC01: User can launch chrome and interact with Google search page
- Location: tests\US02SC01.spec.ts:7:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div.MjjYud').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('div.MjjYud').first() with timeout 10000ms
  - waiting for locator('div.MjjYud').first()

```

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 167.103.2.193 Time: 2026-09-16T13:50:31Z URL: https://www.google.com/search?safe=active&q=Cognizant&sca_esv=655f38eb05f1777e&sxsrf=APpeQnslIRK0KwcrROmm0_NyQVpZuRsI4Q%3A1789566627797&source=hp&ei=o56qari0L6KohvcPkbKIqQ0&iflsig=ABILxe8AAAAAaqqss-mqG6L__2wsoh53RsERLIMFxYoB&ved=0ahUKEwj4kZqZn_OWAxUilOEIHREZItUQ4dUDCA4&oq=Cognizant&gs_lp=Egdnd3Mtd2l6IglDb2duaXphbnQyERAuGIAEGLEDGMkDGMcBGNEDMggQABiABBixAzIFEAAYgAQyBBAAGAMyCxAAGIAEGLEDGIMBMggQABiABBixAzIFEAAYgAQyCBAAGIAEGJIDMgsQABiABBixAxiDATILEC4YgAQYxwEYrwFIyQdQAFgAcAB4AJABAJgB3wGgAd8BqgEDMi0xsAEAuAEMyAEA-AEBmAIBoAKMApgDAOIDBBgAIF3iAwQYACBe4gMEGAAgX-IDBBgAIGDiAwQYACBh4gMEGAAgYpIHAzItMaAH6AiyBwMyLTG4B4wCwgcDNC0xyAcngAgB&sclient=gws-wiz&sei=pp6qatPmFfySseMPnebgiA0&safe=active"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // Define a test suite for Google Search functionality
  4  | test.describe('US02SC01:Google Search Functionality', () => {
  5  | 
  6  |     // Define a test case using Playwright's `page` fixture
  7  |     test('US02SC01-TC01: User can launch chrome and interact with Google search page', async ({ page }) => {
  8  | 
  9  |         // Step1: Go to Google Search Page
  10 |         await test.step('Navigate to Google Search Page', async () => {
  11 |             await page.goto('https://www.google.com/');
  12 |             await page.waitForLoadState('domcontentloaded');
  13 |         });
  14 | 
  15 |         // Step2: Verify Google logo is visible
  16 |         await test.step('Verify Google logo is visible', async () => {
  17 |             const logo = await page.locator('svg[aria-label="Google"]');
  18 |             await expect(logo).toBeVisible();
  19 |         });
  20 | 
  21 |         // Step3: Enter Cognizant in the search box
  22 |         await test.step('Enter Cognizant in the search box', async () => {
  23 |             const searchBox = await page.locator('textarea[name="q"]');
  24 |             const searchText = 'Cognizant';
  25 |             await searchBox.fill(searchText);
  26 |             await expect(searchBox).toHaveValue(searchText);
  27 |         });
  28 | 
  29 |         // Step4: Trigger search (press Enter)
  30 |         await test.step('Trigger search', async () => {
  31 |             const searchButton = await page.locator('input[name="btnK"]').first();
  32 |             await searchButton.click();
  33 |             await page.waitForLoadState('networkidle');
  34 |         });
  35 | 
  36 |         // Step5: Verify results are displayed, Count the results and store in a variable
  37 |         await test.step('Verify results are displayed', async () => {
  38 |             const searchResults = await page.locator('div.MjjYud');
> 39 |             await expect(searchResults.first()).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  40 |             const resultsCount = await searchResults.count();
  41 |             console.log(`Number of search results: ${resultsCount}`);
  42 |         });
  43 | 
  44 |         // Step6: Take screenshot of the search results page
  45 |         await test.step('Take screenshot', async () => {
  46 |             await page.screenshot({ path: 'Cognizant_search_results.png' });
  47 |         });
  48 |     });
  49 | });
```