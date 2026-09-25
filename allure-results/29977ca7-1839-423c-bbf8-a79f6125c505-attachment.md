# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\WebElements.spec.ts >> Interacting with all web elements >> TC-01: Web Elements Interaction @WE
- Location: tests\HandsOnUseCases\WebElements.spec.ts:13:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 7
Received: 0
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
  8  |     test.beforeAll('Initialize Browser', async () => {
  9  |         browser = await chromium.launch();
  10 |         context = await browser.newContext();
  11 |         page = await context.newPage();
  12 |     });
  13 |     test('TC-01: Web Elements Interaction @WE', async() => {
  14 |         let url = "https://testautomationpractice.blogspot.com/";
  15 |         let name = page.getByPlaceholder('Enter Name');
  16 |         let email = page.getByPlaceholder('Enter EMail');
  17 |         let phone = page.getByPlaceholder('Enter Phone'); 
  18 |         let address = page.getByLabel('Address:'); 
  19 |         let gender = page.getByLabel('Female');
  20 |         let Sunday = page.getByLabel('Sunday');
  21 |         let Monday = page.getByLabel('Monday');
  22 |         let Tuesday = page.getByLabel('Tuesday');
  23 |         let Wednesday = page.getByLabel('Wednesday');
  24 |         let countryDD = page.getByLabel('Country:');
  25 |         let colorsDD = page.getByLabel('Colors:');
  26 |         let colorsDDOptions = await page.locator('#colors option').count();
  27 |         let sortedList = page.getByLabel('Sorted List:');
  28 |         let datePicker1 = page.locator('#datepicker');
  29 |         let datePicker2 = page.locator('#txtDate');
  30 |         let anyDate = page.locator('a[data-date="24"]');
  31 |         let uploadFile = page.locator('#singleFileInput');
  32 |         let uploadMultipleFiles = page.locator('#multipleFilesInput');
  33 |         let tableRow = await page.locator('table[name="BookTable"] tbody tr').nth(2).allInnerTexts();
  34 |         let title = page.locator('h1');
  35 |         let mouseHoverText = page.locator('p').filter({hasText: "Move the mouse over the button to open the dropdown menu."});
  36 | 
  37 |         const phoneNumber = Math.floor(
  38 |                                 100000000 + Math.random() * 900000000
  39 |                             ).toString();
  40 | 
  41 |         await page.goto(url, {waitUntil: 'networkidle'});
  42 |         await expect(title).toContainText('Automation Testing Practice');
  43 |         await name.fill('Test test');
  44 |         await email.fill('Test@test.com');
  45 |         await phone.fill(phoneNumber);
  46 |         await address.fill('Whatever street');
  47 |         await gender.check();
  48 |         await expect(Sunday).toBeEnabled();
  49 |         await Monday.check();
  50 |         await Tuesday.check();
  51 |         await Wednesday.check();
> 52 |         await expect(colorsDDOptions).toBe(7);
     |                                       ^ Error: expect(received).toBe(expected) // Object.is equality
  53 |         await countryDD.selectOption('India');
  54 |         await colorsDD.selectOption(['Red', 'White']);
  55 |         await expect(mouseHoverText).toBeVisible();
  56 |         let actualList = await sortedList.allInnerTexts(); 
  57 |         let expectedList = await actualList.sort();
  58 |         await expect(expectedList).toEqual(actualList);
  59 |         await datePicker1.fill('07/08/2001');
  60 |         await datePicker2.click();
  61 |         await anyDate.click();
  62 |         console.log(`Static Table Row content: ${tableRow}`);
  63 | 
  64 |         await uploadFile.setInputFiles('./data/Push_Playwright_Code_to_GitHub_Step_by_Step.txt');
  65 |         await uploadMultipleFiles.setInputFiles([
  66 |             './data/loginData.csv',
  67 |             './data/loginData.json'
  68 |         ]);
  69 | 
  70 |     });
  71 |     test.afterAll('Cleanup', async() => {
  72 |         await page.close();
  73 |         await context.close();
  74 |         await browser.close();
  75 |     });
  76 | 
  77 | });
```