import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';
test.describe('Handling Alerts and Prompts @alerts', () => {
    
    let url = "https://the-internet.herokuapp.com/javascript_alerts";
    
    let alertButton : Locator;
    let confirmButton: Locator;
    let promptButton: Locator;
    let resultText: Locator;
    let message: any;
    let page: Page;
    let browser: Browser;

    test.beforeAll('Initialize Browser', async() => {
        browser = await chromium.launch();
    });
    test.beforeEach('Initialize Page', async() => {
        page = await browser.newPage();
        await page.goto(url);
        await page.waitForLoadState('networkidle');
    });
    test('TS-01: Accept Alert popup', {tag: '@smoke'}, async () => {
        alertButton = await page.getByRole('button', { name: 'Click for JS Alert' });
        // page.on is always before clicking the button that causes the popup
        page.on('dialog', async dialog => {
            console.log(`Alert says: ${dialog.message()}`);
            await dialog.accept();
        });
        await alertButton.click();
    });
    test('TS-02: Accept Confirm popup', {tag: '@smoke'}, async () => {
        alertButton = await page.getByRole('button', { name: 'Click for JS Confirm' });
        // page.on is always before clicking the button that causes the popup
        page.on('dialog', async dialog => {
            console.log(`Alert says: ${dialog.message()}`);
            await dialog.accept();
        });
        await alertButton.click();
    });
    test('TS-03: Dismiss Confirm popup', {tag: '@smoke'}, async () => {
        alertButton = await page.getByRole('button', { name: 'Click for JS Confirm' });
        // page.on is always before clicking the button that causes the popup
        page.on('dialog', async dialog => {
            console.log(`Alert says: ${dialog.message()}`);
            await dialog.dismiss();
        });
        await alertButton.click();
    });
    test('TS-04: Accept Prompt popup', {tag: '@smoke'}, async () => {
        alertButton = await page.getByRole('button', { name: 'Click for JS Prompt' });
        // page.on is always before clicking the button that causes the popup
        page.on('dialog', async dialog => {
            console.log(`Alert says: ${dialog.message()}`);
            await dialog.accept('Accepting the prompt');
        });
        await alertButton.click();
    });
    test('TS-05: Dismiss Prompt popup', {tag: '@smoke'}, async () => {
        alertButton = await page.getByRole('button', { name: 'Click for JS Prompt' });
        // page.on is always before clicking the button that causes the popup
        page.on('dialog', async dialog => {
            console.log(`Alert says: ${dialog.message()}`);
            await dialog.accept('Dismissing the prompt');
        });
        await alertButton.click();
    });
    test.afterEach('Close Page', async() => {
        resultText = await page.locator('#result');
        await resultText.waitFor({state:'visible'});
        message = await resultText.textContent();
        console.log(`Result Text: ${message}`);
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});