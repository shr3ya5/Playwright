# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OtherTests\US02SC01.spec.ts >> US02SC01:Google Search Functionality >> US02SC01-TC01: User can launch chrome and interact with Google search page
- Location: tests\OtherTests\US02SC01.spec.ts:14:9

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
- text: "IP address: 167.103.119.117 Time: 2026-09-21T06:43:00Z URL: https://www.google.com/search?safe=active&q=Cognizant&sca_esv=4201b9442aa8e8a1&sxsrf=APpeQnsSm6doIwxc9wxOP2ET39G4Yag6TA%3A1789972977970&source=hp&ei=8dGwauXiOebzuNkP_LKOyQU&iflsig=ABILxe8AAAAAarDgAWOAWL7zvwXEPs8fRHsO6LJOlLDy&ved=0ahUKEwiln4j8iP-WAxXmOS4FHXyZI1kQ4dUDCA4&oq=Cognizant&gs_lp=Egdnd3Mtd2l6IglDb2duaXphbnQyERAuGIAEGLEDGMkDGMcBGNEDMggQABiABBixAzIFEAAYgAQyBBAAGAMyCBAAGIAEGLEDMggQABiABBi0BzILEAAYgAQYsQMYgwEyBRAAGIAEMggQABiABBiSAzILEAAYgAQYigUYkgNI5wJQAFgAcAB4AJABAJgBdqABdqoBAzAuMbgBDMgBAPgBAZgCAaACggGYAwCSBwMwLjGgB7gHsgcDMC4xuAeCAcIHAzMtMcgHCYAIAQ&sclient=gws-wiz&sei=89GwatPsIK6ZhvcP96vO8QY&safe=active"
```

# Test source

```ts
  1  | import { test, expect, Browser, Page } from '@playwright/test';
  2  | import {chromium} from 'playwright-extra';
  3  | import StealthPlugin from 'puppeteer-extra-plugin-stealth';
  4  | 
  5  | // Define a test suite for Google Search functionality
  6  | test.describe('US02SC01:Google Search Functionality', () => {
  7  |     
  8  |     chromium.use(StealthPlugin());
  9  |     
  10 |     let browser : Browser;
  11 |     let page : Page;
  12 |     
  13 |     // Define a test case using Playwright's `page` fixture
  14 |     test('US02SC01-TC01: User can launch chrome and interact with Google search page', async () => {
  15 |         browser = await chromium.launch();
  16 |         page = await browser.newPage();
  17 |         // Step1: Go to Google Search Page
  18 |         await test.step('Navigate to Google Search Page', async () => {
  19 |             await page.goto('https://www.google.com/');
  20 |             await page.waitForLoadState('domcontentloaded');
  21 |         });
  22 | 
  23 |         // Step2: Verify Google logo is visible
  24 |         await test.step('Verify Google logo is visible', async () => {
  25 |             const logo = await page.locator('svg[aria-label="Google"]');
  26 |             await expect(logo).toBeVisible();
  27 |         });
  28 | 
  29 |         // Step3: Enter Cognizant in the search box
  30 |         await test.step('Enter Cognizant in the search box', async () => {
  31 |             const searchBox = await page.locator('textarea[name="q"]');
  32 |             const searchText = 'Cognizant';
  33 |             await searchBox.fill(searchText);
  34 |             await expect(searchBox).toHaveValue(searchText);
  35 |         });
  36 | 
  37 |         // Step4: Trigger search (press Enter)
  38 |         await test.step('Trigger search', async () => {
  39 |             const searchButton = await page.locator('input[name="btnK"]').first();
  40 |             await searchButton.click();
  41 |             await page.waitForLoadState('networkidle');
  42 |         });
  43 | 
  44 |         // Step5: Verify results are displayed, Count the results and store in a variable
  45 |         await test.step('Verify results are displayed', async () => {
  46 |             const searchResults = await page.locator('div.MjjYud');
> 47 |             await expect(searchResults.first()).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  48 |             const resultsCount = await searchResults.count();
  49 |             console.log(`Number of search results: ${resultsCount}`);
  50 |         });
  51 | 
  52 |         // Step6: Take screenshot of the search results page
  53 |         await test.step('Take screenshot', async () => {
  54 |             await page.screenshot({ path: 'Cognizant_search_results.png' });
  55 |         });
  56 |     });
  57 | });
```