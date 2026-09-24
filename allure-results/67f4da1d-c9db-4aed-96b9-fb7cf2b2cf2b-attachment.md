# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\DropDownOptions.spec.ts >> Handling Dropdown Options @DDO >> TS-02: Multi Select Dropdown selection
- Location: tests\HandsOnUseCases\DropDownOptions.spec.ts:26:9

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('#dropdown-menu')
    - locator resolved to <ul id="dropdown-menu" class="dropdown-menu hidden absolute left-0 right-0 bg-white border border-gray-200 mt-1 z-10">…</ul>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - element is not visible
    - retrying select option action
    - waiting 20ms
    - waiting for element to be visible and enabled
    - element is not visible
  - retrying select option action
    - waiting 100ms

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | test.describe('Handling Dropdown Options @DDO', () => {
  4  |     
  5  |     let url = "https://www.cleartrip.com/all-offers/?categories=flights";
  6  |     
  7  |     let allOffersDD : Locator;
  8  |     let selectFruitsDD : Locator;
  9  |     let page: Page;
  10 |     let browser: Browser;
  11 | 
  12 |     test.beforeAll('Initialize Browser', async() => {
  13 |         browser = await chromium.launch();
  14 |     });
  15 |     test.beforeEach('Initialize Page', async() => {
  16 |         page = await browser.newPage();
  17 |     });
  18 |     test('TS-01: All Offers Dropdown selection', {tag: '@smoke'}, async () => {
  19 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  20 |         allOffersDD = await page.locator('#offer_tag');
  21 |         await expect(allOffersDD).toBeEnabled();
  22 | 
  23 |         allOffersDD.selectOption('Bank Offers');
  24 |         await expect(allOffersDD).toContainText('Bank Offers');
  25 |     });
  26 |     test('TS-02: Multi Select Dropdown selection', {tag: '@smoke'}, async () => {
  27 |         url = 'https://testautomationcentral.com/demo/multi_select_dropdown.html';
  28 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  29 |         
  30 |         selectFruitsDD = await page.locator('#dropdown-menu');
  31 |         await expect(selectFruitsDD).toBeEnabled();
  32 | 
> 33 |         selectFruitsDD.selectOption('Apple');
     |                        ^ Error: locator.selectOption: Target page, context or browser has been closed
  34 |     });
  35 |     test.afterEach('Close Page', async() => {
  36 |         await page.close();
  37 |     });
  38 |     test.afterAll('Close Browser', async() => {
  39 |         await browser.close();
  40 |     });
  41 | });
```