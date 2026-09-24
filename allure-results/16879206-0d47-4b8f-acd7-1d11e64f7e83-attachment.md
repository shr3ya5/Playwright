# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\DropDownOptions.spec.ts >> Handling Dropdown Options @DDO >> TS-02: Multi Select Dropdown selection
- Location: tests\HandsOnUseCases\DropDownOptions.spec.ts:27:9

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://testautomationcentral.com/demo/multi_select_dropdown.html", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | import { parseArgs } from 'node:util';
  4  | test.describe('Handling Dropdown Options @DDO', () => {
  5  |     
  6  |     let url = "https://www.cleartrip.com/all-offers/?categories=flights";
  7  |     
  8  |     let allOffersDD : Locator;
  9  |     let selectFruitsDD : Locator;
  10 |     let page: Page;
  11 |     let browser: Browser;
  12 | 
  13 |     test.beforeAll('Initialize Browser', async() => {
  14 |         browser = await chromium.launch();
  15 |     });
  16 |     test.beforeEach('Initialize Page', async() => {
  17 |         page = await browser.newPage();
  18 |     });
  19 |     test('TS-01: All Offers Dropdown selection', {tag: '@smoke'}, async () => {
  20 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  21 |         allOffersDD = await page.locator('#offer_tag');
  22 |         await expect(allOffersDD).toBeEnabled();
  23 | 
  24 |         allOffersDD.selectOption('Bank Offers');
  25 |         await expect(allOffersDD).toContainText('Bank Offers');
  26 |     });
  27 |     test('TS-02: Multi Select Dropdown selection', {tag: '@smoke'}, async () => {
  28 |         url = 'https://testautomationcentral.com/demo/multi_select_dropdown.html';
> 29 |         await page.goto(url, {waitUntil: 'networkidle'});
     |                    ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  30 | 
  31 |         let selectFruitsbutton = await page.locator('#dropdown-toggle');
  32 |         await selectFruitsbutton.click();
  33 | 
  34 |         selectFruitsDD = await page.locator('#dropdown-menu');
  35 |         await expect(selectFruitsDD).toBeVisible();
  36 | 
  37 |         let AppleOption = await selectFruitsDD.getByText('Apple');
  38 |         await AppleOption.hover();
  39 |         await AppleOption.click({delay: 1000});
  40 | 
  41 |         let BananaOption = await selectFruitsDD.getByText('Banana');
  42 |         await BananaOption.hover();
  43 |         await BananaOption.click({delay: 1000});
  44 | 
  45 |         let selectedOptions = await page.locator('div#selected-items');
  46 |         await expect(selectedOptions).toContainText(/Apple|Banana/);
  47 | 
  48 |     });
  49 |     test.afterEach('Close Page', async() => {
  50 |         await page.close();
  51 |     });
  52 |     test.afterAll('Close Browser', async() => {
  53 |         await browser.close();
  54 |     });
  55 | });
```