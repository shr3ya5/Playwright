# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\DropDownOptions.spec.ts >> Handling Dropdown Options @DDO >> TS-02: Multi Select Dropdown selection
- Location: tests\HandsOnUseCases\DropDownOptions.spec.ts:27:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div#selected-items')
Expected pattern: /Apple|Banana/
Received string:  "Selected: "
Timeout: 10000ms

Call log:
  - Expect "toContainText" locator('div#selected-items') with timeout 10000ms
  - waiting for locator('div#selected-items')
    23 × locator resolved to <div class="mt-2" id="selected-items">Selected: </div>
       - unexpected value "Selected: "

```

```yaml
- text: "Selected:"
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
  29 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  30 |         let selectFruitsbutton = await page.locator('#dropdown-toggle');
  31 |         await selectFruitsbutton.click();
  32 |         selectFruitsDD = await page.locator('#dropdown-menu');
  33 |         await expect(selectFruitsDD).toBeEnabled();
  34 | 
  35 |         let AppleOption = await selectFruitsDD.locator('input[value="Apple"]');
  36 |         await AppleOption.click();
  37 | 
  38 |         let BananaOption = await selectFruitsDD.locator('input[value="Banana"]');
  39 |         await BananaOption.click();
  40 | 
  41 |         let selectedOptions = await page.locator('div#selected-items');
> 42 |         await expect(selectedOptions).toContainText(/Apple|Banana/);
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  43 | 
  44 |     });
  45 |     test.afterEach('Close Page', async() => {
  46 |         await page.close();
  47 |     });
  48 |     test.afterAll('Close Browser', async() => {
  49 |         await browser.close();
  50 |     });
  51 | });
```