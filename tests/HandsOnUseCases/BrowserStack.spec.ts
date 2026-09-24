import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';

test.describe('Browser Stack CSS Examples @CSS', () => {
    
    let url = "https://www.browserstack.com/";
    
    let getStartedFreeButton : Locator;
    let getStartedFreeButtonColor : String;
    let viewPricingButton: Locator;
    let bestDollarValue: Locator;
    let bestDollarValueAmount: String;
    let page: Page;
    let browser: Browser;

    test.beforeAll('Initialize Browser', async() => {
        browser = await chromium.launch();
    });
    test.beforeEach('Initialize Page', async() => {
        page = await browser.newPage();
    });
    test.skip('TS-01: Print color of button', {tag: '@smoke'}, async () => {
        
        await page.goto(url, {waitUntil: 'domcontentloaded'});
        getStartedFreeButton = await page.getByRole('link', {name: /get started free/i }).first();
        //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
        getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
        console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);
        await expect(getStartedFreeButton).toHaveCSS('background-color', `${getStartedFreeButtonColor}`);
        // mouse hover to change color
        await getStartedFreeButton.hover();
        await expect(getStartedFreeButton).not.toHaveCSS('backgorund-color', `${getStartedFreeButtonColor}`);
        // print the changed color
        getStartedFreeButtonColor = await getStartedFreeButton.evaluate(el => getComputedStyle(el).backgroundColor);
        console.log(`Actual Button Color: ${getStartedFreeButtonColor}`);

        viewPricingButton = await page.getByRole('link', {name: /view pricing/i}).first();
        await viewPricingButton.scrollIntoViewIfNeeded();
        await viewPricingButton.click();
        await page.waitForURL('https://www.browserstack.com/pricing?cycle=annual');

        bestDollarValue = await page.locator('div[data-badge="Testing Toolkit Pack"] span[class="simplification-card__price-amount"]');
        bestDollarValueAmount = await bestDollarValue.innerText();
        console.log(`Best Dollar Value Amount: S${bestDollarValueAmount}`);

    });
    test('TS-02: Get Demo button', {tag: '@smoke'}, async () => {

        await page.goto(url, {waitUntil: 'domcontentloaded'});
        let talkToUsButton = await page.getByRole('button', {name: "Talk to us", exact: true}).first();
        //use control.evaluate(el => getComputedStyle(el).backgroundColor) to fetch the background color
        await talkToUsButton.hover();
        await talkToUsButton.dblclick();

        let popupTitle = await page.locator('#popUpCsfModalTitle2');
        let Title = await popupTitle.innerText();
        console.log(`Popup Title: ${Title}`);
    });
    test('TS-03: Printing Tooltip', {tag: '@smoke'}, async () => {

        url = "https://demo.guru99.com/test/tooltip.html";
        await page.goto(url, {waitUntil: 'domcontentloaded'});

        let downloadButton = await page.locator('#download_now'); 
        let tooltip = await page.locator('.tooltip');
        let tooltipText = await tooltip.innerText();
        await downloadButton.waitFor({state: 'visible'});
        await downloadButton.hover();
        await tooltip.waitFor({state: "visible"});
        console.log(`Tooltip Text: ${tooltipText.replaceAll(/[\n\r]+/g,' ').replace(/[\s]+/g,' ')}`);
    });
    test('TS-04: Drag and Drop', {tag: '@smoke'}, async () => {

        url = "https://demo.guru99.com/test/drag_drop.html";
        await page.goto(url, {waitUntil: 'domcontentloaded'});

        let optionBank = await page.locator("#credit2"); 
        let optionSales = await page.locator("#credit1");
        let amount = await page.locator("#fourth").first(); 

        let targetDebit = await page.locator('ol#bank');
        let targetCredit = await page.locator('ol#loan');
        let targetDebitAmount = await page.locator('ol#amt7');
        let targetCreditAmount = await page.locator('ol#amt8');
        
        await optionBank.dragTo(targetDebit);
        await optionSales.dragTo(targetCredit);

        await amount.hover();
        await page.mouse.down();
        await targetDebitAmount.hover();
        await page.mouse.up();

        await amount.dragTo(targetCreditAmount);

        console.log(`Target Debit Amount: `, await targetDebitAmount.innerText());
        console.log(`Target Credit Amount: `, await targetCreditAmount.innerText());
    });
     test('TS-05: Copy Paste Keyboard Options', {tag: '@smoke'}, async () => {

        url = "https://www.tutorialspoint.com/selenium/practice/register.php";
        await page.goto(url, {waitUntil: 'domcontentloaded'});

        let FirstNameText = "Selenium";
        let LastNameText = "Test123456";

        let FirstName = await page.getByPlaceholder('First Name');
        let LastName = await page.getByPlaceholder('lastname');
        let UserName = await page.getByPlaceholder('UserName');
        let Password = await page.getByPlaceholder('Password');
        let RegisterButton = await page.locator('input[value="Register"]');

        await FirstName.fill(FirstNameText);
        await FirstName.dblclick();
        await FirstName.press('Control+A');
        await FirstName.press('Control+C');

        await UserName.click();
        await UserName.press('Control+V');

        await LastName.fill(LastNameText);
        await LastName.dblclick();
        await LastName.press('Control+A');
        await LastName.press('Control+C');

        await Password.click();
        await Password.press('Control+V');

        await RegisterButton.click();
        await page.waitForLoadState('networkidle');
    });
    test('TS-06: Scroll Page', {tag: '@smoke'}, async () => {

        url = "https://the-internet.herokuapp.com/javascript_alerts";
        await page.goto(url, {waitUntil: 'networkidle'});
        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');
    });
    test('TS-07: Scroll Page to Top and Bottom', {tag: '@smoke'}, async () => {

        url = "https://browserstack.com/";
        await page.goto(url, {waitUntil: 'domcontentloaded'});
        await page.keyboard.press('PageDown');
        await page.waitForTimeout(2000);
        await page.keyboard.press('End');
        await page.waitForTimeout(2000);
        await page.keyboard.press('PageUp');
        await page.waitForTimeout(2000);
        await page.keyboard.press('Home');
        await page.waitForTimeout(2000);
    });
    test('TS-08: Scroll Page to a particular element', {tag: '@smoke'}, async () => {

        url = "https://browserstack.com/";
        await page.goto(url, {waitUntil: 'domcontentloaded'});
        let poweredBy = await page.getByText('Newsletter');
        await poweredBy.scrollIntoViewIfNeeded();
    });
    test.afterEach('Close Page', async() => {
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});