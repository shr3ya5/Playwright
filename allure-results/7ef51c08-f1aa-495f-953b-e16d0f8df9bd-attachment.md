# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\ReportGenerationOptions.spec.ts >> Interacting with all web elements >> TC-01: Report Generation Make My Trip @MMT
- Location: tests\HandsOnUseCases\ReportGenerationOptions.spec.ts:14:9

# Error details

```
Error: page.waitForLoadState: Target page, context or browser has been closed
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
  35 |         await test.step('Handle popup', async () => {
  36 |             await closeModal.waitFor({state: "visible"});
  37 |             await closeModal.click();
  38 |         });
  39 |         await test.step('Click on Flights', async () => {
  40 |             await FlightsTab.click();
> 41 |             await page.waitForLoadState('networkidle');
     |                        ^ Error: page.waitForLoadState: Target page, context or browser has been closed
  42 |         });
  43 |         await test.step('Click on Round Trip button', async () => {
  44 |             await roundTripRadio.click();
  45 |         });
  46 |         await test.step('Enter From', async () => {
  47 |             await From.click();
  48 |             await From.pressSequentially('Delhi', {delay: 500});
  49 |             await FromOption.click();
  50 |         });
  51 |         await test.step('Enter To', async () => {
  52 |             await To.click();
  53 |             await To.pressSequentially('Bengaluru', {delay: 500});
  54 |             await ToOption.click();
  55 |         });
  56 |         await test.step('Select departure and arrival dates', async () => {
  57 |             await departureDate.click();
  58 |             await returnDate.click();
  59 |         });
  60 |         await test.step('Click on Search', async () => {
  61 |             await searchButton.click();
  62 |             await page.waitForLoadState('networkidle'); 
  63 |         });
  64 |         await test.step('Print Flight Details for First AI Express Flight', async () => {
  65 |             console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, 
  66 |                                     +       ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
  67 |         });
  68 |     
  69 |     });
  70 |     test.afterAll('Cleanup', async() => {
  71 |         await page.close();
  72 |         await context.clearCookies();
  73 |         await context.close();
  74 |         await browser.close();
  75 |     });
  76 | 
  77 | });
```