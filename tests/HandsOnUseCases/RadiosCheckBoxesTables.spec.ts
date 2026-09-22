import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';
test.describe('Handling Radios Checkboxes and Tables @RCT', () => {
    
    let url = "https://rahulshettyacademy.com/AutomationPractice/";
    
    let radioButton1 : Locator;
    let radioButton2 : Locator;
    let checkBox1: Locator;
    let checkBox2: Locator;
    let checkBox3: Locator;
    let promptButton: Locator;
    let tableText: Locator;
    let message: any;
    let page: Page;
    let browser: Browser;

    test.beforeAll('Initialize Browser', async() => {
        browser = await chromium.launch();
    });
    test.beforeEach('Initialize Page', async() => {
        page = await browser.newPage();
        await page.goto(url, {timeout:90000});
        await page.waitForURL(url);
    });
    test('TS-01: Clicking on Radio Button', {tag: '@smoke'}, async () => {
        radioButton1 = await page.locator('input[value="radio1"]');
        await radioButton1.click();
        await expect(radioButton1).toBeChecked();

        radioButton2 = await page.locator('input[value="radio2"]');
        await radioButton2.click();
        await expect(radioButton2).toBeChecked();
        
        await expect(radioButton1).not.toBeChecked();
    });
    test('TS-02: Clicking on Check boxes', {tag: '@smoke'}, async () => {
        checkBox1 = await page.locator('input[value="option1"]');
        checkBox2 = await page.locator('input[value="option2"]')
        checkBox3 = await page.locator('input[value="option3"]')
        
        await checkBox1.check();
        await expect(checkBox1).toBeChecked();

        await checkBox2.check();
        await expect(checkBox2).toBeChecked();

        await checkBox3.check();
        await expect(checkBox3).toBeChecked();

        await checkBox1.uncheck();
        await expect(checkBox1).not.toBeChecked();
    });
    test('TS-03: Getting Text from Table', {tag: '@smoke'}, async () => {
        tableText = await page.locator('table#product tbody tr:nth-child(9) td:nth-child(3)').last();
        await tableText.scrollIntoViewIfNeeded();
        let fieldValue = await tableText.textContent();
        console.log(`Field Value inside table: ${fieldValue}`);
    });
    test.afterEach('Close Page', async() => {
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});