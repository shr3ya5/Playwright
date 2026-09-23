# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\BrowserStack.spec.ts >> Browser Stack CSS Examples @CSS >> TS-06: Scroll Page
- Location: tests\HandsOnUseCases\BrowserStack.spec.ts:133:9

# Error details

```
Error: keyboard.press: Unknown key: "Down"
```

# Test source

```ts
  37  | 
  38  |         viewPricingButton = await page.getByRole('link', {name: /view pricing/i}).first();
  39  |         await viewPricingButton.scrollIntoViewIfNeeded();
  40  |         await viewPricingButton.click();
  41  |         await page.waitForURL('https://www.browserstack.com/pricing?cycle=annual');
  42  | 
  43  |         bestDollarValue = await page.locator('div[data-badge="Testing Toolkit Pack"] span[class="simplification-card__price-amount"]');
  44  |         bestDollarValueAmount = await bestDollarValue.innerText();
  45  |         console.log(`Best Dollar Value Amount: S${bestDollarValueAmount}`);
  46  | 
  47  |     });
  48  |     test('TS-02: Get Demo button', {tag: '@smoke'}, async () => {
  49  | 
  50  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  51  |         let talkToUsButton = await page.getByRole('button', {name: "Talk to us", exact: true}).first();
  52  |         //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
  53  |         await talkToUsButton.hover();
  54  |         await talkToUsButton.dblclick();
  55  | 
  56  |         let popupTitle = await page.locator('#popUpCsfModalTitle2');
  57  |         let Title = await popupTitle.innerText();
  58  |         console.log(`Popup Title: ${Title}`);
  59  |     });
  60  |     test('TS-03: Printing Tooltip', {tag: '@smoke'}, async () => {
  61  | 
  62  |         url = "https://demo.guru99.com/test/tooltip.html";
  63  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  64  | 
  65  |         let downloadButton = await page.locator('#download_now'); 
  66  |         let tooltip = await page.locator('.tooltip');
  67  |         let tooltipText = await tooltip.innerText();
  68  |         await downloadButton.waitFor({state: 'visible'});
  69  |         await downloadButton.hover();
  70  |         await tooltip.waitFor({state: "visible"});
  71  |         console.log(`Tooltip Text: ${tooltipText.replaceAll(/[\n\r]+/g,' ').replace(/[\s]+/g,' ')}`);
  72  |     });
  73  |     test('TS-04: Drag and Drop', {tag: '@smoke'}, async () => {
  74  | 
  75  |         url = "https://demo.guru99.com/test/drag_drop.html";
  76  |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  77  | 
  78  |         let optionBank = await page.locator("#credit2"); 
  79  |         let optionSales = await page.locator("#credit1");
  80  |         let amount = await page.locator("#fourth").first(); 
  81  | 
  82  |         let targetDebit = await page.locator('ol#bank');
  83  |         let targetCredit = await page.locator('ol#loan');
  84  |         let targetDebitAmount = await page.locator('ol#amt7');
  85  |         let targetCreditAmount = await page.locator('ol#amt8');
  86  |         
  87  |         await optionBank.dragTo(targetDebit);
  88  |         await optionSales.dragTo(targetCredit);
  89  | 
  90  |         await amount.hover();
  91  |         await page.mouse.down();
  92  |         await targetDebitAmount.hover();
  93  |         await page.mouse.up();
  94  | 
  95  |         await amount.dragTo(targetCreditAmount);
  96  | 
  97  |         console.log(`Target Debit Amount: `, await targetDebitAmount.innerText());
  98  |         console.log(`Target Credit Amount: `, await targetCreditAmount.innerText());
  99  |     });
  100 |      test('TS-05: Copy Paste Keyboard Options', {tag: '@smoke'}, async () => {
  101 | 
  102 |         url = "https://www.tutorialspoint.com/selenium/practice/register.php";
  103 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
  104 | 
  105 |         let FirstNameText = "Selenium";
  106 |         let LastNameText = "Test123456";
  107 | 
  108 |         let FirstName = await page.getByPlaceholder('First Name');
  109 |         let LastName = await page.getByPlaceholder('lastname');
  110 |         let UserName = await page.getByPlaceholder('UserName');
  111 |         let Password = await page.getByPlaceholder('Password');
  112 |         let RegisterButton = await page.locator('input[value="Register"]');
  113 | 
  114 |         await FirstName.fill(FirstNameText);
  115 |         await FirstName.dblclick();
  116 |         await FirstName.press('Control+A');
  117 |         await FirstName.press('Control+C');
  118 | 
  119 |         await UserName.click();
  120 |         await UserName.press('Control+V');
  121 | 
  122 |         await LastName.fill(LastNameText);
  123 |         await LastName.dblclick();
  124 |         await LastName.press('Control+A');
  125 |         await LastName.press('Control+C');
  126 | 
  127 |         await Password.click();
  128 |         await Password.press('Control+V');
  129 | 
  130 |         await RegisterButton.click();
  131 |         await page.waitForLoadState('networkidle');
  132 |     });
  133 |     test('TS-06: Scroll Page', {tag: '@smoke'}, async () => {
  134 | 
  135 |         url = "https://the-internet.herokuapp.com/javascript_alerts";
  136 |         await page.goto(url, {waitUntil: 'domcontentloaded'});
> 137 |         await page.keyboard.press('Down');
      |                             ^ Error: keyboard.press: Unknown key: "Down"
  138 |         await page.keyboard.press('Down');
  139 |         await page.keyboard.press('End');
  140 |     });
  141 |     test.afterEach('Close Page', async() => {
  142 |         await page.close();
  143 |     });
  144 |     test.afterAll('Close Browser', async() => {
  145 |         await browser.close();
  146 |     });
  147 | });
```