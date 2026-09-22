# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\RadiosCheckBoxesTables.spec.ts >> Handling Radios Checkboxes and Tables @RCT >> TS-02: Cliking on Check boxes
- Location: tests\HandsOnUseCases\RadiosCheckBoxesTables.spec.ts:37:9

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | test.describe('Handling Radios Checkboxes and Tables @RCT', () => {
  4  |     
  5  |     let url = "https://rahulshettyacademy.com/AutomationPractice/";
  6  |     
  7  |     let radioButton1 : Locator;
  8  |     let radioButton2 : Locator;
  9  |     let checkBox1: Locator;
  10 |     let checkBox2: Locator;
  11 |     let checkBox3: Locator;
  12 |     let promptButton: Locator;
  13 |     let tableText: Locator;
  14 |     let message: any;
  15 |     let page: Page;
  16 |     let browser: Browser;
  17 | 
  18 |     test.beforeAll('Initialize Browser', async() => {
  19 |         browser = await chromium.launch();
  20 |     });
  21 |     test.beforeEach('Initialize Page', async() => {
  22 |         page = await browser.newPage();
> 23 |         await page.goto(url);
     |                    ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  24 |         await page.waitForURL(url);
  25 |     });
  26 |     test('TS-01: Cliking on Radio Button', {tag: '@smoke'}, async () => {
  27 |         radioButton1 = await page.getByLabel('Radio1');
  28 |         await radioButton1.click();
  29 |         await expect(radioButton1).toBeChecked();
  30 | 
  31 |         radioButton2 = await page.getByLabel('Radio2');
  32 |         await radioButton2.click();
  33 |         await expect(radioButton2).toBeChecked();
  34 |         
  35 |         await expect(radioButton1).not.toBeChecked();
  36 |     });
  37 |     test('TS-02: Cliking on Check boxes', {tag: '@smoke'}, async () => {
  38 |         checkBox1 = await page.getByLabel('Option1');
  39 |         checkBox2 = await page.getByLabel('Option2');
  40 |         checkBox3 = await page.getByLabel('Option3');
  41 |         
  42 |         await checkBox1.check();
  43 |         await expect(checkBox1).toBeChecked();
  44 | 
  45 |         await checkBox2.check();
  46 |         await expect(checkBox2).toBeChecked();
  47 | 
  48 |         await checkBox3.check();
  49 |         await expect(checkBox3).toBeChecked();
  50 | 
  51 |         await checkBox1.uncheck();
  52 |         await expect(checkBox1).not.toBeChecked();
  53 |     });
  54 |     test('TS-03: Getting Text from Tab;e', {tag: '@smoke'}, async () => {
  55 |         tableText = await page.locator('table#product tbody tr: nth-child(4) td: nth-child(3)');
  56 |         let fieldValue = tableText.textContent();
  57 |         console.log(`Field Value inside table: ${fieldValue}`);
  58 |     });
  59 |     test.afterEach('Close Page', async() => {
  60 |         await page.close();
  61 |     });
  62 |     test.afterAll('Close Browser', async() => {
  63 |         await browser.close();
  64 |     });
  65 | });
```