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
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

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
  19 |             
  20 |             try {
  21 |                 test.step('Navigate to Orange HRM Login Page', async () => {
> 22 |                     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'networkidle' });
     |                                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  23 |                     await page.waitForSelector('input[name="username"]');
  24 |                     await expect(page).toHaveTitle(/OrangeHRM/);
  25 |                 });
  26 |                 test.step('Perform login with credentials', async () => {
  27 |                     await page.fill('input[name="username"]', data.username);
  28 |                     await page.fill('input[name="password"]', data.password);
  29 |                     await page.click('button[type="submit"]');
  30 |                     
  31 |                     // Only expect dashboard for valid credentials
  32 |                     if (data.username === 'Admin' && data.password === 'admin123') {
  33 |                         await expect(await page.locator('h6')).toHaveText('Dashboard');
  34 |                         await page.screenshot({ path: `screenshots/${data.username}_success.png` });
  35 |                     } else {
  36 |                         // Handle invalid login scenarios
  37 |                         await page.screenshot({ path: `screenshots/${data.username}_failed.png` });
  38 |                     }
  39 |                 });
  40 |             } finally {
  41 |                 await page.close();
  42 |                 await context.close();
  43 |                 await browser.close();
  44 |             }
  45 |         });
  46 |     });
  47 | });
```