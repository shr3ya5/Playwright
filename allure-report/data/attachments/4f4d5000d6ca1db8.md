# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Orange HRM Login Data Driven Tests with Array >> Login Tests with Data Driven Approach - Test 2
- Location: tests\DataDrivenwithArray.spec.ts:14:13

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://practicetestautomation.com/practice-test-login/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect, Browser} from '@playwright/test';
  2  | import {chromium, Page} from '@playwright/test';
  3  | 
  4  | test.describe('Orange HRM Login Data Driven Tests with Array', () => {
  5  |     const loginData = [
  6  |         { username: 'student', password: 'Password123' },
  7  |         { username: 'student', password: 'wrongpassword' },
  8  |        /* { username: 'WrongUser', password: 'admin123' },
  9  |         { username: '', password: 'admin123' },
  10 |         { username: 'Admin', password: '' },
  11 |         { username: '', password: '' }*/
  12 |     ];
  13 |     loginData.forEach((data, index) => {
  14 |         test(`Login Tests with Data Driven Approach - Test ${index + 1}`, async () => {
  15 |             const browser : Browser = await chromium.launch({ headless: false });
  16 |             const context = await browser.newContext();
  17 |             const page : Page = await context.newPage();
  18 |             
  19 |         
  20 |             test.step('Navigate to Orange HRM Login Page', async () => {
> 21 |                 await page.goto('https://practicetestautomation.com/practice-test-login/');
     |                            ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  22 |                 await page.waitForSelector('input[name="username"]');
  23 |                 await expect(page).toHaveTitle(/Test Login/);
  24 |             });
  25 |             test.step('Perform login with credentials', async () => {
  26 |                 await page.fill('input[name="username"]', data.username);
  27 |                 await page.fill('input[name="password"]', data.password);
  28 |                 await page.click('button[id="submit"]');
  29 |                 
  30 |                 // Only expect dashboard for valid credentials
  31 |                 if (data.username === 'student' && data.password === 'Password123') {
  32 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  33 |                     await page.screenshot({ path: `screenshots/${index + 1}_success.png` });
  34 |                 } else {
  35 |                     // Handle invalid login scenarios
  36 |                     await page.screenshot({ path: `screenshots/${index + 1}_failed.png` });
  37 |                 }
  38 |             });
  39 |             await page.close();
  40 |             await context.close();
  41 |             await browser.close();
  42 |         });
  43 |     });
  44 | });
```