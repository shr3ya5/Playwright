# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\FrameNavigation.spec.ts >> Frame Navigations @Frames >> TS-01: Print Frame Info
- Location: tests\HandsOnUseCases\FrameNavigation.spec.ts:22:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[./h1[text()="Frames"]]/h2').nth(2)

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | import { chromium, Page, Browser } from '@playwright/test';
  3  | 
  4  | test.describe('Frame Navigations @Frames', () => {
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
  21 |     });
  22 |     test('TS-01: Print Frame Info', {tag: '@smoke'}, async () => {
  23 |         url = "https://www.tutorialspoint.com/selenium/practice/frames.php";
  24 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  25 |         
  26 |         let Frame1Header = await page.locator('//div[./h1[text()="Frames"]]/h2').first();
  27 |         let Frame2Header = await page.locator('//div[./h1[text()="Frames"]]/h2').nth(2);
  28 | 
  29 |         console.log(`Frame1 Header: ${await Frame1Header.innerText()}`);
> 30 |         console.log(`Frame2 Header: ${await Frame2Header.innerText()}`);
     |                                                          ^ Error: locator.innerText: Target page, context or browser has been closed
  31 |        
  32 |     });
  33 |     test('TS-02: Print Frame Info', {tag: '@smoke'}, async () => {
  34 |         url = "https://www.tutorialspoint.com/selenium/practice/frames.php";
  35 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  36 |         
  37 |         let Frames = await page.frames();
  38 |         for(let frame of Frames){
  39 |             console.log(`Frame Name: ${frame.name()}`);
  40 |             console.log(`Frame URL: ${frame.url()}`);
  41 |             console.log(`Frame Content: ${await frame.locator('body').innerText()}`);
  42 |         }
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