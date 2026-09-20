# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenTesting\DataDrivenwithCSV.spec.ts >> Data Driven Tests with CSV >> Login Tests with CSV Data Driven Approach - Test 5
- Location: tests\DataDrivenTesting\DataDrivenwithCSV.spec.ts:37:13

# Error details

```
Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import {test, expect, Browser, chromium, Page} from '@playwright/test';
  2  | import { readCSV_Util } from '../utils/Parsers';
  3  | import path from 'path';
  4  | 
  5  | test.describe('Data Driven Tests with CSV', () => {
  6  |     // For typescript strong typing
  7  |     interface LoginData {
  8  |         username: string;
  9  |         password: string;
  10 |     }
  11 |     let csvFilePath = path.join(process.cwd(),'data','loginData.csv');  // '../handson/data/loginData.csv'
  12 |     let loginData = readCSV_Util(csvFilePath) as LoginData[];
  13 |     // Launch the browser and create a new page
  14 |     let browser: Browser;
  15 |     let page: Page;
  16 |     let context: any;
  17 |     
  18 |     // Before all tests, you can perform any setup required for the test suite
  19 |     test.beforeAll('Set up', async () => {
  20 |         browser = await chromium.launch({ headless: process.env.CI ? true : false });
  21 |     });
  22 |     // Before each test
  23 |     test.beforeEach('Precondition', async () => {
  24 |         context = await browser.newContext();
  25 |         page = await context.newPage();
  26 |     });
  27 |      // Close the page and browser after each test
  28 |     test.afterEach('Postcondition', async ()=> {
  29 |         await page.close();
  30 |         await context.close();
  31 |     }) 
  32 |     test.afterAll('Clean up', async () => {
  33 |         await browser?.close();
  34 |     })
  35 |     // For loop for data driven tests
  36 |     loginData.forEach((data, index) => {
  37 |         test(`Login Tests with CSV Data Driven Approach - Test ${index + 1}`, async () => {
  38 |             // Navigate to the Orange HRM login page and perform login actions
  39 |             await test.step('Navigate to Orange HRM Login Page', async () => {
> 40 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded'});
     |                            ^ Error: page.goto: net::ERR_HTTP_RESPONSE_CODE_FAILURE at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  41 |                 await page.waitForSelector('input[name="username"]');
  42 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  43 |         });
  44 |             await test.step('Perform login with credentials', async () => {
  45 |                 await page.fill('input[name="username"]', data.username);
  46 |                 await page.fill('input[name="password"]', data.password);
  47 |                 await page.click('button[type="submit"]');
  48 |                 await page.waitForLoadState('networkidle');
  49 |                 
  50 |                 // Only expect dashboard for valid credentials
  51 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  52 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  53 |                     await page.screenshot({
  54 |                         path: test.info().outputPath(`${test.info().title}_success.png`)
  55 |                     });
  56 |                     //await page.screenshot({ path: `screenshots/ Test ${index + 1}_success.png` });
  57 |                 } else {
  58 |                     // Handle invalid login scenarios
  59 |                     await page.screenshot({
  60 |                         path: test.info().outputPath(`${test.info().title}_failed.png`)
  61 |                     });
  62 |                     //await page.screenshot({ path: `screenshots/ Test ${index + 1}_failed.png` });
  63 |                 }
  64 |             });
  65 |         });
  66 |     });
  67 | });
```