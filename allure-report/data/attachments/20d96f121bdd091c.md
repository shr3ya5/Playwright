# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VisualRegressions.spec.ts >> Visual Regression Tests >> Visual Regression Test for wikipedia
- Location: tests\VisualRegressions.spec.ts:23:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.wikipedia.org/
Call log:
  - navigating to "https://www.wikipedia.org/", waiting until "load"

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
  18 |         await page.waitForLoadState('domcontentloaded');
  19 |         await page.screenshot({path: 'tests/screenshots/google.png', fullPage: true});
  20 |         await expect(await page.screenshot()).toMatchSnapshot('google.png');
  21 |     });
  22 | 
  23 |     test('Visual Regression Test for wikipedia', async () => {
> 24 |         await page.goto('https://www.wikipedia.org');
     |                    ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://www.wikipedia.org/
  25 |         await page.waitForLoadState('domcontentloaded');
  26 |         await page.screenshot({path: 'tests/screenshots/wikipedia.png', fullPage: true});
  27 |         await expect(await page.screenshot()).toMatchSnapshot('wikipedia.png');
  28 |     });
  29 | 
  30 |     test.afterEach('Postcondition Executes After Each', async() => {
  31 |         await page.close();
  32 |         await context.close();
  33 |         await browser.close();
  34 |     });    
  35 | });
```