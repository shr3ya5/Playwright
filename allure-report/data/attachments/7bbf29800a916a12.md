# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Data Driven Tests with Array >> Login Tests with Data Driven Approach - Test 2
- Location: tests\DataDrivenwithArray.spec.ts:36:13

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="username"]') to be visible

```

# Test source

```ts
  1  | import {test, expect, Browser, chromium, Page} from '@playwright/test';
  2  | 
  3  | test.describe('Data Driven Tests with Array', () => {
  4  |     // Launch the browser and create a new page
  5  |     let browser: Browser;
  6  |     let page: Page;
  7  |     let context: any;
  8  |     const loginData = [
  9  |             { username: 'Admin', password: 'admin123' },
  10 |             { username: 'Admin', password: 'wrongpassword' },
  11 |             { username: 'WrongUser', password: 'admin123' },
  12 |             { username: '', password: 'admin123' },
  13 |             { username: 'Admin', password: '' },
  14 |             { username: '', password: '' }
  15 |     ];
  16 |     // Before all tests, you can perform any setup required for the test suite
  17 |     test.beforeAll('Set up', async () => {
  18 |         browser = await chromium.launch({ headless: false });
  19 |         context = await browser.newContext();
  20 |     });
  21 |     // Before each test
  22 |     test.beforeEach('Precondition', async () => {
  23 |         page = await context.newPage();
  24 |     });
  25 |      // Close the page and browser after each test
  26 |     test.afterEach('PostCondition', async () => {
  27 |         await page.close();
  28 |     });
  29 |     // CLose the Browser
  30 |     test.afterAll('Clean up', async () => {
  31 |         await context.close();
  32 |         await browser.close();
  33 |     })
  34 |     // For loop for data driven tests
  35 |     loginData.forEach((data, index) => {
  36 |         test(`Login Tests with Data Driven Approach - Test ${index + 1}`, async () => {
  37 |             // Navigate to the Orange HRM login page and perform login actions
  38 |             await test.step('Navigate to Orange HRM Login Page', async () => {
  39 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
> 40 |                 await page.waitForSelector('input[name="username"]');
     |                            ^ Error: page.waitForSelector: Target page, context or browser has been closed
  41 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  42 |         });
  43 |             await test.step('Perform login with credentials', async () => {
  44 |                 await page.fill('input[name="username"]', data.username);
  45 |                 await page.fill('input[name="password"]', data.password);
  46 |                 await page.click('button[type="submit"]');
  47 |                 await page.waitForLoadState('networkidle');
  48 |                 
  49 |                 // Only expect dashboard for valid credentials
  50 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  51 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  52 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_success.png` });
  53 |                 } else {
  54 |                     // Handle invalid login scenarios
  55 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_failed.png` });
  56 |                 }
  57 |             });
  58 |         });
  59 |     });
  60 | });
```