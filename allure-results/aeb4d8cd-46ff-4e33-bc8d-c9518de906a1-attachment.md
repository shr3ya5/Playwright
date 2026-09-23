# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\BrowserStack.spec.ts >> Browser Stack CSS Examples @CSS >> TS-01: Print color of button
- Location: tests\HandsOnUseCases\BrowserStack.spec.ts:21:9

# Error details

```
Error: expect(locator).toHaveCSS(expected) failed

Locator:  getByRole('link', { name: /get started free/i }).first()
Expected: "rgb(255, 122, 0)"
Received: "rgb(0, 112, 240)"
Timeout:  10000ms

Call log:
  - Expect "toHaveCSS" getByRole('link', { name: /get started free/i }).first() with timeout 10000ms
  - waiting for getByRole('link', { name: /get started free/i }).first()
    12 × locator resolved to <a href="/users/sign_up" id="signupModalProductButton" aria-label="Get started free" class="btn btn-primary btn-lg col-md-3 get-started-hero free_trial_csf_control control-version-cta-btn">Get started free</a>
       - unexpected value "rgb(0, 112, 240)"
    11 × locator resolved to <a href="/users/sign_up" id="signupModalProductButton" aria-label="Get started free" data-faitracker-click-bind="true" class="btn btn-primary btn-lg col-md-3 get-started-hero free_trial_csf_control control-version-cta-btn">Get started free</a>
       - unexpected value "rgb(0, 112, 240)"

```

```yaml
- link "Get started free":
  - /url: /users/sign_up
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | import { styleText } from 'node:util';
  4  | test.describe('Browser Stack CSS Examples @CSS', () => {
  5  |     
  6  |     let url = "https://www.browserstack.com/";
  7  |     
  8  |     let getStartedFreeButton : Locator;
  9  |     let getStartedFreeButtonColor : String;
  10 |     
  11 |     let page: Page;
  12 |     let browser: Browser;
  13 | 
  14 |     test.beforeAll('Initialize Browser', async() => {
  15 |         browser = await chromium.launch();
  16 |     });
  17 |     test.beforeEach('Initialize Page', async() => {
  18 |         page = await browser.newPage();
  19 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  20 |     });
  21 |     test('TS-01: Print color of button', {tag: '@smoke'}, async () => {
  22 |         getStartedFreeButton = await page.getByRole('link', {name: /get started free/i }).first();
  23 |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  24 |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
  25 |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
> 26 |         await expect(getStartedFreeButton).toHaveCSS('background-color', 'rgb(255, 122, 0)');
     |                                            ^ Error: expect(locator).toHaveCSS(expected) failed
  27 |     });
  28 |     test.afterEach('Close Page', async() => {
  29 |         await page.close();
  30 |     });
  31 |     test.afterAll('Close Browser', async() => {
  32 |         await browser.close();
  33 |     });
  34 | });
```