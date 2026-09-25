# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\ReportGenerationOptions.spec.ts >> Report Generation Example >> TC-01: Report Generation Make My Trip @MMT
- Location: tests\HandsOnUseCases\ReportGenerationOptions.spec.ts:5:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('div[class="flightCard__mainRow"]').filter({ hasText: 'Air India Express' }).first() to be visible
    - waiting for "https://www.makemytrip.com/flight/search?itinerary=DEL-BLR-25/09/2026_BLR-DEL-31/10/2026&tripType=R&paxType=A-1_C-0_I-0&intl=false&cabinClass=E&lang=eng" navigation to finish...
    - navigated to "https://www.makemytrip.com/flight/search?itinerary=DEL-BLR-25/09/2026_BLR-DEL-31/10/2026&tripType=R&paxType=A-1_C-0_I-0&intl=false&cabinClass=E&lang=eng"

```

# Page snapshot

```yaml
- generic [active] [ref=f9e1]: 200-OK
```

# Test source

```ts
  1  | import {test,expect, Browser, Page, chromium} from '@playwright/test';
  2  | 
  3  | test.describe('Report Generation Example', () => {
  4  |     
  5  |     test('TC-01: Report Generation Make My Trip @MMT', async({page}) => {
  6  |         
  7  |         let url = "https://www.makemytrip.com/";
  8  |         let roundTripRadio = page.getByText('Round Trip');
  9  |         let FlightsTab = page.locator('li[data-cy="menu_Flights"]');
  10 |         let From = page.getByLabel('From');
  11 |         let FromInput = page.getByRole('textbox', { name: 'From', exact: true });
  12 |         let ToInput = page.getByRole('textbox', { name: 'To', exact: true });
  13 |         let FromOption = page.locator('li').filter({hasText: "New Delhi, India"});
  14 |         let To = page.getByLabel('To');
  15 |         let ToOption = page.locator('li').filter({hasText: "Bengaluru, India"});
  16 |         let departureDate = page.locator('div[aria-disabled="false"][role="gridcell"]').first();
  17 |         let returnDate = page.locator('div[aria-disabled="false"][role="gridcell"]').last();
  18 |         let searchButton = page.locator('a').filter({hasText: "Search"});
  19 |         let AIExpressFirstFlight = page.locator('div[class="flightCard__mainRow"]').filter({hasText: "Air India Express"}).first();
  20 |         let departTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock"] span[class="flightCard__time"]');
  21 |         let arrivalTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock flightCard__timeBlock--arr"] span[class="flightCard__time"]');
  22 |         let totalJourneyTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="boldFont"]');
  23 |         let journeyType = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="flightsLayoverInfo"]'); 
  24 |         let closeModal = page.locator('div section[data-cy="CommonModal_2"] span[data-cy="closeModal"]');
  25 |         
  26 |         await test.step('Navigate to Make My Trip', async () => {
  27 |                 await page.goto(url, {waitUntil: "domcontentloaded"});
  28 |         });
  29 |         await test.step('Handle popup', async () => {
  30 |             await closeModal.waitFor({state: "visible"});
  31 |             await closeModal.click();
  32 |         });
  33 |         await test.step('Click on Flights', async () => {
  34 |             await FlightsTab.click();
  35 |         });
  36 |         await test.step('Click on Round Trip button', async () => {
  37 |             await roundTripRadio.waitFor({state: "visible"});
  38 |             await roundTripRadio.click();
  39 |         });
  40 |         await test.step('Enter From', async () => {
  41 |             await From.click();
  42 |             await FromInput.pressSequentially('Delhi', {delay: 500});
  43 |             await FromOption.click();
  44 |         });
  45 |         await test.step('Enter To', async () => {
  46 |             await To.click();
  47 |             await ToInput.pressSequentially('Bengaluru', {delay: 500});
  48 |             await ToOption.click();
  49 |         });
  50 |         await test.step('Select departure and arrival dates', async () => {
  51 |             await departureDate.hover();
  52 |             await departureDate.click();
  53 |             await returnDate.hover();
  54 |             await returnDate.click();
  55 |         });
  56 |         await test.step('Click on Search', async () => {
  57 |             await Promise.all([
> 58 |                 AIExpressFirstFlight.waitFor({state: "visible"}),
     |                                      ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  59 |                 searchButton.click()
  60 |             ]);
  61 |         });
  62 |         await test.step('Print Flight Details for First AI Express Flight', async () => {
  63 |             console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, 
  64 |                                     +       ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
  65 |         });
  66 |     });
  67 | });
```