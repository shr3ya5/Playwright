# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Orange HRM Login Data Driven Tests with Array >> Login Tests with Data Driven Approach - User: Admin (Test 1)
- Location: tests\DataDrivenwithArray.spec.ts:15:13

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import {chromium} from '@playwright/test';
  3  | 
  4  | test.describe('Orange HRM Login Data Driven Tests with Array', () => {
  5  |     const loginData = [
  6  |         { username: 'Admin', password: 'admin123' },
  7  |         { username: 'Admin', password: 'wrongpassword' },
  8  |        /* { username: 'WrongUser', password: 'admin123' },
  9  |         { username: '', password: 'admin123' },
  10 |         { username: 'Admin', password: '' },
  11 |         { username: '', password: '' }*/
  12 |     ];
  13 | 
  14 |     loginData.forEach((data, index) => {
  15 |         test(`Login Tests with Data Driven Approach - User: ${data.username} (Test ${index + 1})`, async () => {
  16 |             const browser = await chromium.launch({ headless: false });
  17 |             const context = await browser.newContext();
  18 |             const page = await context.newPage();
  19 |             test.step('Navigate to Orange HRM Login Page', async () => {
> 20 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |                            ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  21 |                 await page.waitForSelector('input[name="username"]');
  22 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  23 |             });
  24 |             test.step('Perform login with credentials', async () => {
  25 |                 await page.fill('input[name="username"]', data.username);
  26 |                 await page.fill('input[name="password"]', data.password);
  27 |                 await page.click('button[type="submit"]');
  28 |                 
  29 |                 // Only expect dashboard for valid credentials
  30 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  31 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  32 |                     await page.screenshot({ path: `screenshots/${data.username}_success.png` });
  33 |                 } else {
  34 |                     // Handle invalid login scenarios
  35 |                     await page.screenshot({ path: `screenshots/${data.username}_failed.png` });
  36 |                 }
  37 |             });
  38 |             
  39 |             await page.close();
  40 |             await context.close();
  41 |             await browser.close();
  42 |         });
  43 |     });
  44 | });
```