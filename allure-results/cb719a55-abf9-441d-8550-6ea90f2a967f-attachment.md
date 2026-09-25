# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\ReportGenerationOptions.spec.ts >> Interacting with all web elements >> TC-01: Report Generation Make My Trip @MMT
- Location: tests\HandsOnUseCases\ReportGenerationOptions.spec.ts:14:9

# Error details

```
TimeoutError: page.waitForLoadState: Timeout 30000ms exceeded.
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Test source

```ts
  1  | import {test,expect, Browser, Page, chromium} from '@playwright/test';
  2  | 
  3  | test.describe('Interacting with all web elements', () => {
  4  | 
  5  |     let browser: Browser;
  6  |     let context: any;
  7  |     let page: Page;
  8  |     
  9  |     test.beforeAll('Initialize Browser', async () => {
  10 |         browser = await chromium.launch();
  11 |         context = await browser.newContext();
  12 |         page = await context.newPage();
  13 |     });
  14 |     test('TC-01: Report Generation Make My Trip @MMT', async() => {
  15 |         let url = "https://www.makemytrip.com/";
  16 |         let roundTripRadio = page.getByText('Round Trip');
  17 |         let FlightsTab = page.locator('li[data-cy="menu_Flights"]');
  18 |         let From = page.getByLabel('From');
  19 |         let FromOption = page.locator('li').filter({hasText: "New Delhi, India"});
  20 |         let To = page.getByLabel('To');
  21 |         let ToOption = page.locator('li').filter({hasText: "Bengaluru, India"});
  22 |         let departureDate = page.locator('div[aria-disabled="false"][role="gridcell"][class=/DayPicker/]').first();
  23 |         let returnDate = page.locator('div[aria-disabled="false"][role="gridcell"][class=/DayPicker/]').last();
  24 |         let searchButton = page.locator('p[data-cy="submit"]').filter({hasText:"Search"});
  25 |         let AIExpressFirstFlight = page.locator('div[class="flightCard__mainRow"]').filter({hasText: "Air India Express"}).first();
  26 |         let departTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock"] span[class="flightCard__time"]');
  27 |         let arrivalTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock flightCard__timeBlock--arr"] span[class="flightCard__time"]');
  28 |         let totalJourneyTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="boldFont"]');
  29 |         let journeyType = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="flightsLayoverInfo"]'); 
  30 |         let closeModal = page.locator('div section[data-cy="CommonModal_2"] span[data-cy="closeModal"]');
  31 |         
  32 |         await test.step('Navigate to Make My Trip', async () => {
  33 |             await page.goto(url, {waitUntil: "domcontentloaded"});
  34 |         });
  35 |         await test.step('If popup appears handle it', async () => {
  36 |             if(await closeModal.isVisible()){
  37 |             await closeModal.click();
  38 |         }
  39 |         });
  40 |         await test.step('Click on Flights', async () => {
  41 |             await FlightsTab.click();
> 42 |             await page.waitForLoadState('networkidle');
     |                        ^ TimeoutError: page.waitForLoadState: Timeout 30000ms exceeded.
  43 |         });
  44 |         await test.step('Click on Round Trip button', async () => {
  45 |             await roundTripRadio.click();
  46 |         });
  47 |         await test.step('Enter From', async () => {
  48 |             await From.click();
  49 |             await From.pressSequentially('Delhi', {delay: 500});
  50 |             await FromOption.click();
  51 |         });
  52 |         await test.step('Enter To', async () => {
  53 |             await To.click();
  54 |             await To.pressSequentially('Bengaluru', {delay: 500});
  55 |             await ToOption.click();
  56 |         });
  57 |         await test.step('Select departure and arrival dates', async () => {
  58 |             await departureDate.click();
  59 |             await returnDate.click();
  60 |         });
  61 |         await test.step('Click on Search', async () => {
  62 |             await searchButton.click();
  63 |             await page.waitForLoadState('networkidle'); 
  64 |         });
  65 |         await test.step('Print Flight Details for First AI Express Flight', async () => {
  66 |             console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, 
  67 |                                     +       ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
  68 |         });
  69 |     
  70 |     });
  71 |     test.afterAll('Cleanup', async() => {
  72 |         await page.close();
  73 |         await context.clearCookies();
  74 |         await context.close();
  75 |         await browser.close();
  76 |     });
  77 | 
  78 | });
```