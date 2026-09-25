# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\ReportGenerationOptions.spec.ts >> Interacting with all web elements >> TC-01: Web Elements Interaction @WE
- Location: tests\HandsOnUseCases\ReportGenerationOptions.spec.ts:14:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('li[data-cy="menu_Flights"]')

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
  30 | 
  31 |         //let closeModal = page.locator('div section[data-cy="CommonModal_2"] span[data-cy="closeModal"]');
  32 |         await page.waitForLoadState('networkidle');
  33 |         page.on('dialog', async(dialog) => {
  34 |             console.log(`Dialog defaultValue: ${dialog.defaultValue}, 
  35 |                         + Dialog message: ${dialog.message}, Dialog type: ${dialog.type}`);
  36 |             dialog.dismiss();
  37 | 
  38 |         })
  39 |         //await closeModal.waitFor({state: "attached"});
  40 |         //await closeModal.click();
> 41 |         await FlightsTab.click();
     |                          ^ Error: locator.click: Target page, context or browser has been closed
  42 |         await page.waitForLoadState('networkidle');
  43 |         
  44 |         await roundTripRadio.click();
  45 | 
  46 |         await From.click();
  47 |         await From.pressSequentially('Delhi', {delay: 500});
  48 |         await FromOption.click();
  49 | 
  50 |         await To.click();
  51 |         await To.pressSequentially('Bengaluru', {delay: 500});
  52 |         await ToOption.click();
  53 |         
  54 |         await departureDate.click();
  55 |         await returnDate.click();
  56 |         
  57 |         await searchButton.click();
  58 |         await page.waitForLoadState('networkidle');
  59 | 
  60 |         console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
  61 |     
  62 |     });
  63 |     test.afterAll('Cleanup', async() => {
  64 |         await page.close();
  65 |         await context.close();
  66 |         await browser.close();
  67 |     });
  68 | 
  69 | });
```