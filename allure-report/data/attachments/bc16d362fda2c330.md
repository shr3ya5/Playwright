# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Data Driven Tests with Array >> Login Tests with Data Driven Approach - Test 6
- Location: tests\DataDrivenwithArray.spec.ts:35:13

# Error details

```
Error: browserContext.newPage: Target page, context or browser has been closed
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
> 23 |         page = await context.newPage();
     |                              ^ Error: browserContext.newPage: Target page, context or browser has been closed
  24 |     });
  25 |      // Close the page and browser after each test
  26 |     test.afterEach('Postcondition', async ()=> {
  27 |         await page.close();
  28 |         await context.close();
  29 |     }) 
  30 |     test.afterAll('Clean up', async () => {
  31 |         await browser.close();
  32 |     })
  33 |     // For loop for data driven tests
  34 |     loginData.forEach((data, index) => {
  35 |         test(`Login Tests with Data Driven Approach - Test ${index + 1}`, async () => {
  36 |             // Navigate to the Orange HRM login page and perform login actions
  37 |             await test.step('Navigate to Orange HRM Login Page', async () => {
  38 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded'});
  39 |                 await page.waitForSelector('input[name="username"]');
  40 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  41 |         });
  42 |             await test.step('Perform login with credentials', async () => {
  43 |                 await page.fill('input[name="username"]', data.username);
  44 |                 await page.fill('input[name="password"]', data.password);
  45 |                 await page.click('button[type="submit"]');
  46 |                 await page.waitForLoadState('networkidle');
  47 |                 
  48 |                 // Only expect dashboard for valid credentials
  49 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  50 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  51 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_success.png` });
  52 |                 } else {
  53 |                     // Handle invalid login scenarios
  54 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_failed.png` });
  55 |                 }
  56 |             });
  57 |         });
  58 |     });
  59 | });
```