# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\BrowserStack.spec.ts >> Browser Stack CSS Examples @CSS >> TS-01: Print color of button
- Location: tests\HandsOnUseCases\BrowserStack.spec.ts:21:9

# Error details

```
Error: locator.evaluate: Error: strict mode violation: getByRole('link', { name: /get started free/i }) resolved to 2 elements:
    1) <a href="/users/sign_up" id="signupModalProductButton" aria-label="Get started free" class="btn btn-primary btn-lg col-md-3 get-started-hero free_trial_csf_control control-version-cta-btn">Get started free</a> aka getByRole('link', { name: 'Get started free', exact: true })
    2) <a data-btn-eventname="InteractedWithHomePage" href="https://www.browserstack.com/users/sign_up" data-btn-ampjson="{"action":"Sign Up CTA Bottom"}" class="btn col-center btn-primary btn-lg custom-btn-amp-events"> Get Started Free</a> aka getByRole('link', { name: 'Get Started Free', exact: true })

Call log:
  - waiting for getByRole('link', { name: /get started free/i })

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
  22 |         getStartedFreeButton = await page.getByRole('link', {name: /get started free/i });
  23 |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
> 24 |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
     |                                                                ^ Error: locator.evaluate: Error: strict mode violation: getByRole('link', { name: /get started free/i }) resolved to 2 elements:
  25 |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
  26 |         await expect(getStartedFreeButton).toHaveCSS('background-color', 'rgb(255, 122, 0)');
  27 |     });
  28 |     test.afterEach('Close Page', async() => {
  29 |         await page.close();
  30 |     });
  31 |     test.afterAll('Close Browser', async() => {
  32 |         await browser.close();
  33 |     });
  34 | });
```