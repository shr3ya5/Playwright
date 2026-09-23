# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\BrowserStack.spec.ts >> Browser Stack CSS Examples @CSS >> TS-03: Printing Tooltip
- Location: tests\HandsOnUseCases\BrowserStack.spec.ts:58:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('.tooltip')

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
  10 |     let viewPricingButton: Locator;
  11 |     let bestDollarValue: Locator;
  12 |     let bestDollarValueAmount: String;
  13 |     let page: Page;
  14 |     let browser: Browser;
  15 | 
  16 |     test.beforeAll('Initialize Browser', async() => {
  17 |         browser = await chromium.launch();
  18 |     });
  19 |     test.beforeEach('Initialize Page', async() => {
  20 |         page = await browser.newPage();
  21 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  22 |     });
  23 |     test('TS-01: Print color of button', {tag: '@smoke'}, async () => {
  24 | 
  25 |         getStartedFreeButton = await page.getByRole('link', {name: /get started free/i }).first();
  26 |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  27 |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
  28 |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
  29 |         await expect(getStartedFreeButton).toHaveCSS('background-color', `${getStartedFreeButtonColor}`);
  30 |         // mouse hover to change color
  31 |         await getStartedFreeButton.hover();
  32 |         await expect(getStartedFreeButton).not.toHaveCSS('backgorund-color', `${getStartedFreeButtonColor}`);
  33 |         // print the changed color
  34 |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
  35 |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
  36 | 
  37 |         viewPricingButton = await page.getByRole('link', {name: /view pricing/i}).first();
  38 |         await viewPricingButton.scrollIntoViewIfNeeded();
  39 |         await viewPricingButton.click();
  40 |         await page.waitForURL('https://www.browserstack.com/pricing?cycle=annual');
  41 | 
  42 |         bestDollarValue = await page.locator('div[data-badge="Testing Toolkit Pack"] span[class="simplification-card__price-amount"]');
  43 |         bestDollarValueAmount = await bestDollarValue.innerText();
  44 |         console.log(`Best Dollar Value Amount: S${bestDollarValueAmount}`);
  45 | 
  46 |     });
  47 |     test('TS-02: Get Demo button', {tag: '@smoke'}, async () => {
  48 | 
  49 |         let talkToUsButton = await page.getByRole('button', {name: "Talk to us", exact: true}).first();
  50 |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  51 |         await talkToUsButton.hover();
  52 |         await talkToUsButton.dblclick();
  53 | 
  54 |         let popupTitle = await page.locator('#popUpCsfModalTitle2');
  55 |         let Title = await popupTitle.innerText();
  56 |         console.log(`Popup Title: ${Title}`);
  57 |     });
  58 |     test('TS-03: Printing Tooltip', {tag: '@smoke'}, async () => {
  59 | 
  60 |         url = "https://demo.guru99.com/test/tooltip.html";
  61 |         let downloadButton = await page.locator('#download_now'); 
  62 |         let tooltip = await page.locator('.tooltip');
> 63 |         let tooltipText = await tooltip.textContent();
     |                                         ^ Error: locator.textContent: Target page, context or browser has been closed
  64 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  65 |         await downloadButton.waitFor({state: 'visible'});
  66 |         await downloadButton.hover();
  67 |         await tooltip.waitFor({state: "visible"});
  68 |         console.log(`Tooltip Text: ${tooltipText}`);
  69 |     });
  70 |     test.afterEach('Close Page', async() => {
  71 |         await page.close();
  72 |     });
  73 |     test.afterAll('Close Browser', async() => {
  74 |         await browser.close();
  75 |     });
  76 | });
```