# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\BrowserStack.spec.ts >> Browser Stack CSS Examples @CSS >> TS-01: Print color of button
- Location: tests\HandsOnUseCases\BrowserStack.spec.ts:22:9

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: /view pricing/i }).first()

```

# Test source

```ts
  1   | import { test, expect, Locator } from '@playwright/test';
  2   | import { chromium, Page, Browser } from '@playwright/test';
  3   | 
  4   | test.describe('Browser Stack CSS Examples @CSS', () => {
  5   |     
  6   |     let url = "https://www.browserstack.com/";
  7   |     
  8   |     let getStartedFreeButton : Locator;
  9   |     let getStartedFreeButtonColor : String;
  10  |     let viewPricingButton: Locator;
  11  |     let bestDollarValue: Locator;
  12  |     let bestDollarValueAmount: String;
  13  |     let page: Page;
  14  |     let browser: Browser;
  15  | 
  16  |     test.beforeAll('Initialize Browser', async() => {
  17  |         browser = await chromium.launch();
  18  |     });
  19  |     test.beforeEach('Initialize Page', async() => {
  20  |         page = await browser.newPage();
  21  |     });
  22  |     test('TS-01: Print color of button', {tag: '@smoke'}, async () => {
  23  |         
  24  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  25  |         getStartedFreeButton = await page.getByRole('link', {name: /get started free/i }).first();
  26  |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  27  |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
  28  |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
  29  |         await expect(getStartedFreeButton).toHaveCSS('background-color', `${getStartedFreeButtonColor}`);
  30  |         // mouse hover to change color
  31  |         await getStartedFreeButton.hover();
  32  |         await expect(getStartedFreeButton).not.toHaveCSS('backgorund-color', `${getStartedFreeButtonColor}`);
  33  |         // print the changed color
  34  |         getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
  35  |         console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
  36  | 
  37  |         viewPricingButton = await page.getByRole('link', {name: /view pricing/i}).first();
> 38  |         await viewPricingButton.scrollIntoViewIfNeeded();
      |                                 ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  39  |         await viewPricingButton.click();
  40  |         await page.waitForURL('https://www.browserstack.com/pricing?cycle=annual');
  41  | 
  42  |         bestDollarValue = await page.locator('div[data-badge="Testing Toolkit Pack"] span[class="simplification-card__price-amount"]');
  43  |         bestDollarValueAmount = await bestDollarValue.innerText();
  44  |         console.log(`Best Dollar Value Amount: S${bestDollarValueAmount}`);
  45  | 
  46  |     });
  47  |     test('TS-02: Get Demo button', {tag: '@smoke'}, async () => {
  48  | 
  49  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  50  |         let talkToUsButton = await page.getByRole('button', {name: "Talk to us", exact: true}).first();
  51  |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  52  |         await talkToUsButton.hover();
  53  |         await talkToUsButton.dblclick();
  54  | 
  55  |         let popupTitle = await page.locator('#popUpCsfModalTitle2');
  56  |         let Title = await popupTitle.innerText();
  57  |         console.log(`Popup Title: ${Title}`);
  58  |     });
  59  |     test('TS-03: Printing Tooltip', {tag: '@smoke'}, async () => {
  60  | 
  61  |         url = "https://demo.guru99.com/test/tooltip.html";
  62  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  63  | 
  64  |         let downloadButton = await page.locator('#download_now'); 
  65  |         let tooltip = await page.locator('.tooltip');
  66  |         let tooltipText = await tooltip.innerText();
  67  |         await downloadButton.waitFor({state: 'visible'});
  68  |         await downloadButton.hover();
  69  |         await tooltip.waitFor({state: "visible"});
  70  |         console.log(`Tooltip Text: ${tooltipText.replaceAll(/[\n\r]+/g,' ').replace(/[\s]+/g,' ')}`);
  71  |     });
  72  |     test('TS-04: Drag and Drop', {tag: '@smoke'}, async () => {
  73  | 
  74  |         url = "https://demo.guru99.com/test/drag_drop.html";
  75  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  76  | 
  77  |         let optionBank = await page.locator("#credit2"); 
  78  |         let optionSales = await page.locator("#credit1");
  79  |         let amount = await page.locator("#fourth").first(); 
  80  | 
  81  |         let targetDebit = await page.locator('ol#bank');
  82  |         let targetCredit = await page.locator('ol#loan');
  83  |         let targetDebitAmount = await page.locator('ol#amt7');
  84  |         let targetCreditAmount = await page.locator('ol#amt8');
  85  |         
  86  |         await optionBank.dragTo(targetDebit);
  87  |         await optionSales.dragTo(targetCredit);
  88  | 
  89  |         await amount.hover();
  90  |         await page.mouse.down();
  91  |         await targetDebitAmount.hover();
  92  |         await page.mouse.up();
  93  | 
  94  |         await amount.dragTo(targetCreditAmount);
  95  | 
  96  |         console.log(`Target Debit Amount: `, await targetDebitAmount.innerText());
  97  |         console.log(`Target Credit Amount: `, await targetCreditAmount.innerText());
  98  |     });
  99  |      test('TS-05: Copy Paste Keyboard Options', {tag: '@smoke'}, async () => {
  100 | 
  101 |         url = "https://www.tutorialspoint.com/selenium/practice/register.php";
  102 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  103 | 
  104 |         let FirstNameText = "Selenium";
  105 |         let LastNameText = "Test123456";
  106 | 
  107 |         let FirstName = await page.getByPlaceholder('First Name');
  108 |         let LastName = await page.getByPlaceholder('lastname');
  109 |         let UserName = await page.getByPlaceholder('UserName');
  110 |         let Password = await page.getByPlaceholder('Password');
  111 |         let RegisterButton = await page.locator('input[value="Register"]');
  112 | 
  113 |         await FirstName.fill(FirstNameText);
  114 |         await FirstName.dblclick();
  115 |         await FirstName.press('Control+A');
  116 |         await FirstName.press('Control+C');
  117 | 
  118 |         await UserName.click();
  119 |         await UserName.press('Control+V');
  120 | 
  121 |         await LastName.fill(LastNameText);
  122 |         await LastName.dblclick();
  123 |         await LastName.press('Control+A');
  124 |         await LastName.press('Control+C');
  125 | 
  126 |         await Password.click();
  127 |         await Password.press('Control+V');
  128 | 
  129 |         await RegisterButton.click();
  130 |         await page.waitForLoadState('networkidle');
  131 |     });
  132 |     test('TS-06: Scroll Page', {tag: '@smoke'}, async () => {
  133 | 
  134 |         url = "https://the-internet.herokuapp.com/javascript_alerts";
  135 |         await page.goto(url, {waitUntil: 'networkidle'});
  136 |         await page.keyboard.press('PageDown');
  137 |         await page.keyboard.press('PageDown');
  138 |     });
```