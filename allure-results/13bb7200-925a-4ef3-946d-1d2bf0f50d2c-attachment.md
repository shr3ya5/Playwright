# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\Alerts&Prompts.spec.ts >> Handling Alerts and Prompts @alerts >> TS-04: Accept Prompt popup
- Location: tests\HandsOnUseCases\Alerts&Prompts.spec.ts:53:9

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | test.describe('Handling Alerts and Prompts @alerts', () => {
  4  |     
  5  |     let url = "https://the-internet.herokuapp.com/javascript_alerts";
  6  |     
  7  |     let alertButton : Locator;
  8  |     let confirmButton: Locator;
  9  |     let promptButton: Locator;
  10 |     let resultText: Locator;
  11 |     let page: Page;
  12 |     let browser: Browser;
  13 | 
  14 |     test.beforeAll('Initialize Browser', async() => {
  15 |         browser = await chromium.launch();
  16 |     });
  17 |     test.beforeEach('Initialize Page', async() => {
  18 |         page = await browser.newPage();
> 19 |         await page.goto(url);
     |                    ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  20 |         await page.waitForLoadState('networkidle');
  21 |         resultText = await page.locator('p#result');
  22 |     });
  23 |     test('TS-01: Accept Alert popup', {tag: '@smoke'}, async () => {
  24 |         alertButton = await page.getByRole('button', { name: 'Click for JS Alert' });
  25 |         // page.on is always before clicking the button that causes the popup
  26 |         page.on('dialog', async dialog => {
  27 |             console.log(`Alert says: ${dialog.message()}`);
  28 |             await dialog.accept();
  29 |         });
  30 |         await alertButton.click();
  31 |         console.log(`Result Text: ${resultText.textContent}`);
  32 |     });
  33 |     test('TS-02: Accept Confirm popup', {tag: '@smoke'}, async () => {
  34 |         alertButton = await page.getByRole('button', { name: 'Click for JS Confirm' });
  35 |         // page.on is always before clicking the button that causes the popup
  36 |         page.on('dialog', async dialog => {
  37 |             console.log(`Alert says: ${dialog.message()}`);
  38 |             await dialog.accept();
  39 |         });
  40 |         await alertButton.click();
  41 |         console.log(`Result Text: ${resultText.textContent}`);
  42 |     });
  43 |     test('TS-03: Dismiss Confirm popup', {tag: '@smoke'}, async () => {
  44 |         alertButton = await page.getByRole('button', { name: 'Click for JS Confirm' });
  45 |         // page.on is always before clicking the button that causes the popup
  46 |         page.on('dialog', async dialog => {
  47 |             console.log(`Alert says: ${dialog.message()}`);
  48 |             await dialog.dismiss();
  49 |         });
  50 |         await alertButton.click();
  51 |         console.log(`Result Text: ${resultText.textContent}`);
  52 |     });
  53 |     test('TS-04: Accept Prompt popup', {tag: '@smoke'}, async () => {
  54 |         alertButton = await page.getByRole('button', { name: 'Click for JS Prompt' });
  55 |         // page.on is always before clicking the button that causes the popup
  56 |         page.on('dialog', async dialog => {
  57 |             console.log(`Alert says: ${dialog.message()}`);
  58 |             await dialog.accept('Accepting the prompt');
  59 |         });
  60 |         await alertButton.click();
  61 |         console.log(`Result Text: ${resultText.textContent}`);
  62 |     });
  63 |     test('TS-05: Dismiss Prompt popup', {tag: '@smoke'}, async () => {
  64 |         alertButton = await page.getByRole('button', { name: 'Click for JS Prompt' });
  65 |         // page.on is always before clicking the button that causes the popup
  66 |         page.on('dialog', async dialog => {
  67 |             console.log(`Alert says: ${dialog.message()}`);
  68 |             await dialog.accept('Dismissing the prompt');
  69 |         });
  70 |         await alertButton.click();
  71 |         console.log(`Result Text: ${resultText.textContent}`);
  72 |     });
  73 |     test.afterEach('Close Page', async() => {
  74 |         await page.close();
  75 |     });
  76 |     test.afterAll('Close Browser', async() => {
  77 |         await browser.close();
  78 |     });
  79 | });
```