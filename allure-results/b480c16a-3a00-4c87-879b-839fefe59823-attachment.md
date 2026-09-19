# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Orange HRM Login Data Driven Tests with Array >> Login Tests with Data Driven Approach - User: Admin (Test 2)
- Location: tests\DataDrivenwithArray.spec.ts:15:13

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect, Browser} from '@playwright/test';
  2  | import {chromium, Page} from '@playwright/test';
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
  16 |             const browser : Browser = await chromium.launch({ headless: false });
  17 |             const context = await browser.newContext();
  18 |             const page : Page = await context.newPage();
  19 |             
  20 |             test.step('Navigate to Orange HRM Login Page', async () => {
> 21 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {timeout: 60000});
     |                            ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  22 |                 await page.waitForSelector('input[name="username"]');
  23 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  24 |             });
  25 |             test.step('Perform login with credentials', async () => {
  26 |                 await page.fill('input[name="username"]', data.username);
  27 |                 await page.fill('input[name="password"]', data.password);
  28 |                 await page.click('button[type="submit"]');
  29 |                 
  30 |                 // Only expect dashboard for valid credentials
  31 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  32 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  33 |                     await page.screenshot({ path: `screenshots/${data.username}_success.png` });
  34 |                 } else {
  35 |                     // Handle invalid login scenarios
  36 |                     await page.screenshot({ path: `screenshots/${data.username}_failed.png` });
  37 |                 }
  38 |             });
  39 | 
  40 |             await page.close();
  41 |             await context.close();
  42 |             await browser.close();
  43 |         });
  44 |     });
  45 | });
```