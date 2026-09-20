# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Data Driven Tests with Array >> Login Tests with Data Driven Approach - Test 2
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
  4  | test.describe('Data Driven Tests with Array', () => {
  5  |     const loginData = [
  6  |         { username: 'student', password: 'Password123' },
  7  |         { username: 'student', password: 'wrongpassword' }
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
  18 |             test.step('Navigate to Orange HRM Login Page', async () => {
> 19 |                 await page.goto('https://practicetestautomation.com/practice-test-login/');
     |                            ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  20 |                 await page.waitForSelector('input[name="username"]');
  21 |                 await expect(page).toHaveTitle(/Test Login/);
  22 |             });
  23 |             test.step('Perform login with credentials', async () => {
  24 |                 await page.fill('input[name="username"]', data.username);
  25 |                 await page.fill('input[name="password"]', data.password);
  26 |                 await page.click('button[id="submit"]');
  27 |                 
  28 |                 // Only expect dashboard for valid credentials
  29 |                 if (data.username === 'student' && data.password === 'Password123') {
  30 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  31 |                     await page.screenshot({ path: `screenshots/${index + 1}_success.png` });
  32 |                 } else {
  33 |                     // Handle invalid login scenarios
  34 |                     await page.screenshot({ path: `screenshots/${index + 1}_failed.png` });
  35 |                 }
  36 |             });
  37 |             await page.close();
  38 |             await context.close();
  39 |             await browser.close();
  40 |         });
  41 |     });
  42 | });
```