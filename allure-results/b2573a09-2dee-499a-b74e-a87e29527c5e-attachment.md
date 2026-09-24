# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\WebElements.spec.ts >> Interacting with all web elements >> TC-01: Web Elements Interaction @WE
- Location: tests\HandsOnUseCases\WebElements.spec.ts:14:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('table[name="BookTable"] tbody tr').nth(1)

```

# Test source

```ts
  1  | import {test,expect, Browser, Page, chromium} from '@playwright/test';
  2  | import { add } from 'winston';
  3  | 
  4  | test.describe('Interacting with all web elements', () => {
  5  | 
  6  |     let browser: Browser;
  7  |     let context: any;
  8  |     let page: Page;
  9  |     test.beforeAll('Initialize Browser', async () => {
  10 |         browser = await chromium.launch();
  11 |         context = await browser.newContext();
  12 |         page = await context.newPage();
  13 |     });
  14 |     test('TC-01: Web Elements Interaction @WE', async() => {
  15 |         let url = "https://testautomationpractice.blogspot.com/";
  16 |         let name = await page.getByPlaceholder('Enter Name');
  17 |         let email = await page.getByPlaceholder('Enter EMail');
  18 |         let phone = await page.getByPlaceholder('Enter Phone'); 
  19 |         let address = await page.getByLabel('Address:'); 
  20 |         let gender = await page.getByLabel('Female');
  21 |         let Monday = await page.getByLabel('Monday');
  22 |         let Tuesday = await page.getByLabel('Tuesday');
  23 |         let Wednesday = await page.getByLabel('Wednesday');
  24 |         let countryDD = await page.getByLabel('Country:');
  25 |         let colorsDD = await page.getByLabel('Colors:');
  26 |         let sortedList = await page.getByLabel('Sorted List:');
  27 |         let datePicker1 = await page.locator('#datepicker');
  28 |         let datePicker2 = await page.locator('#txtDate');
  29 |         let anyDate = await page.locator('a[data-date="24"]');
  30 |         let uploadFile = await page.locator('#singleFileInput');
  31 |         let uploadMultipleFiles = await page.locator('#multipleFilesInput');
  32 |         let staticTable = await page.getByRole('table', {name: "BookTable"});
> 33 |         let tableRow = await page.locator('table[name="BookTable"] tbody tr').nth(1).textContent();
     |                                                                                      ^ Error: locator.textContent: Target page, context or browser has been closed
  34 | 
  35 |         await page.goto(url, {waitUntil: 'networkidle'});
  36 |         await name.fill('Test Test');
  37 |         await email.fill('Test@test.com');
  38 |         await phone.fill('123456789');
  39 |         await address.fill('Whatever street');
  40 |         await gender.check();
  41 |         await Monday.check();
  42 |         await Tuesday.check();
  43 |         await Wednesday.check();
  44 |         await countryDD.selectOption('India');
  45 |         await colorsDD.selectOption(['Red', 'White']);
  46 |         let actualList = await sortedList.allInnerTexts(); 
  47 |         let expectedList = await actualList.sort();
  48 |         await expect(expectedList).toEqual(actualList);
  49 |         await datePicker1.fill('07/08/2001');
  50 |         await datePicker2.click();
  51 |         await anyDate.click();
  52 |         console.log(`Static Table Row content: ${tableRow}`);
  53 | 
  54 |         await uploadFile.setInputFiles('./data/Push_Playwright_Code_to_GitHub_Step_by_Step.txt');
  55 |         await uploadMultipleFiles.setInputFiles([
  56 |             './data/loginData.csv',
  57 |             './data/loginData.json'
  58 |         ]);
  59 | 
  60 |     });
  61 |     test.afterAll('Cleanup', async() => {
  62 |         await page.close();
  63 |         await context.close();
  64 |         await browser.close();
  65 |     });
  66 | 
  67 | });
```