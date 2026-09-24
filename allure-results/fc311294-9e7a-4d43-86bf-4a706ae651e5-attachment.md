# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\DropDownOptions.spec.ts >> Handling Dropdown Options @DDO >> TS-03: Multi Color Option selection
- Location: tests\HandsOnUseCases\DropDownOptions.spec.ts:46:9

# Error details

```
Error: expect(locator).toHaveValues(expected) failed

Locator: locator('#colors')
Timeout: 10000ms
- Expected  - 3
+ Received  + 3

  Array [
-   "Red",
-   "Blue",
-   "Green",
+   "red",
+   "blue",
+   "green",
  ]

Call log:
  - Expect "toHaveValues" locator('#colors') with timeout 10000ms
  - waiting for locator('#colors')
    23 × locator resolved to <select multiple id="colors" class="form-control">…</select>

```

```yaml
- listbox "Colors:":
  - option "Red" [selected]
  - option "Blue" [selected]
  - option "Green" [selected]
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
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
  29 |         await page.goto(url, {waitUntil: 'networkidle'});
  30 | 
  31 |         let selectFruitsbutton = await page.locator('#dropdown-toggle');
  32 |         await selectFruitsbutton.click();
  33 | 
  34 |         selectFruitsDD = await page.locator('#dropdown-menu');
  35 |         await expect(selectFruitsDD).toBeVisible();
  36 | 
  37 |         let AppleOption = await page.locator('ul#dropdown-menu li').filter({hasText: 'Apple'});
  38 |         await AppleOption.click();
  39 | 
  40 |         let BananaOption = await page.locator('ul#dropdown-menu li').filter({hasText: 'Banana'});
  41 |         await BananaOption.click();
  42 | 
  43 |         let selectedOptions = await page.locator('div#selected-items');
  44 |         await expect(selectedOptions).toContainText(/Apple|Banana/);
  45 |     });
  46 |     test('TS-03: Multi Color Option selection', {tag: '@smoke'}, async () => {
  47 |         url = 'https://testautomationpractice.blogspot.com/';
  48 |         await page.goto(url, {waitUntil: 'networkidle'});
  49 | 
  50 |         let colorsList = await page.locator('#colors');
  51 | 
  52 |         await page.keyboard.press('PageDown');
  53 |         await page.keyboard.press('PageDown');
  54 |         await page.keyboard.press('PageDown');
  55 | 
  56 |         await colorsList.selectOption(['Red', 'Blue', 'Green']);
> 57 |         await expect(colorsList).toHaveValues(['Red', 'Blue', 'Green']);
     |                                  ^ Error: expect(locator).toHaveValues(expected) failed
  58 |     });
  59 |     test.afterEach('Close Page', async() => {
  60 |         await page.close();
  61 |     });
  62 |     test.afterAll('Close Browser', async() => {
  63 |         await browser.close();
  64 |     });
  65 | });
```