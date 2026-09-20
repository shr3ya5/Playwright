# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VisualRegressions.spec.ts >> Visual Regression Tests >> Visual Regression Test for google
- Location: tests\VisualRegressions.spec.ts:16:9

# Error details

```
Error: A snapshot doesn't exist at C:\HandsOn\tests\VisualRegressions.spec.ts-snapshots\google-chromium-win32.png, writing actual.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import {chromium, Browser, Page} from '@playwright/test';
  3  | 
  4  | test.describe('Visual Regression Tests', () => {
  5  | 
  6  |     let browser: Browser;
  7  |     let context: any;
  8  |     let page: Page;
  9  | 
  10 |     test.beforeEach('Precondition Executes Before Each', async() => {
  11 |         browser = await chromium.launch({headless: false});
  12 |         context = await browser.newContext();
  13 |         page = await context.newPage();
  14 |     });
  15 | 
  16 |     test('Visual Regression Test for google', async () => {
  17 |         await page.goto('https://www.google.com');
  18 |         await page.waitForLoadState('networkidle');
> 19 |         await expect(page).toHaveScreenshot('google.png');
     |         ^ Error: A snapshot doesn't exist at C:\HandsOn\tests\VisualRegressions.spec.ts-snapshots\google-chromium-win32.png, writing actual.
  20 |     });
  21 | 
  22 |     test('Visual Regression Test for wikipedia', async () => {
  23 |         await page.goto('https://www.wikipedia.org');
  24 |         await page.waitForLoadState('networkidle');
  25 |         await expect(page).toHaveScreenshot('wikipedia.png');
  26 |     });
  27 | 
  28 |     test.afterEach('Postcondition Executes After Each', async() => {
  29 |         await page.close();
  30 |         await context.close();
  31 |         await browser.close();
  32 |     });    
  33 | });
```