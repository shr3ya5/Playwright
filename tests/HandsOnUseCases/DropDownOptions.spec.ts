import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';
import { parseArgs } from 'node:util';
test.describe('Handling Dropdown Options @DDO', () => {
    
    let url = "https://www.cleartrip.com/all-offers/?categories=flights";
    
    let allOffersDD : Locator;
    let selectFruitsDD : Locator;
    let page: Page;
    let browser: Browser;

    test.beforeAll('Initialize Browser', async() => {
        browser = await chromium.launch();
    });
    test.beforeEach('Initialize Page', async() => {
        page = await browser.newPage();
    });
    test('TS-01: All Offers Dropdown selection', {tag: '@smoke'}, async () => {
        await page.goto(url, {waitUntil: 'networkidle'});
        allOffersDD = await page.locator('#offer_tag');
        await expect(allOffersDD).toBeEnabled();

        allOffersDD.selectOption('Bank Offers');
        await expect(allOffersDD).toContainText('Bank Offers');
    });
    test('TS-02: Multi Select Dropdown selection', {tag: '@smoke'}, async () => {
        url = 'https://testautomationcentral.com/demo/multi_select_dropdown.html';
        await page.goto(url, {waitUntil: 'networkidle'});

        let selectFruitsbutton = await page.locator('#dropdown-toggle');
        await selectFruitsbutton.click();

        selectFruitsDD = await page.locator('#dropdown-menu');
        await expect(selectFruitsDD).toBeVisible();

        let AppleOption = await page.locator('ul#dropdown-menu li').filter({hasText: 'Apple'});
        await AppleOption.click();

        let BananaOption = await page.locator('ul#dropdown-menu li').filter({hasText: 'Banana'});
        await BananaOption.click();

        let selectedOptions = await page.locator('div#selected-items');
        await expect(selectedOptions).toContainText(/Apple|Banana/);
    });
    test('TS-03: Multi Color Option selection', {tag: '@smoke'}, async () => {
        url = 'https://testautomationpractice.blogspot.com/';
        await page.goto(url, {waitUntil: 'networkidle'});

        let colorsList = await page.locator('#colors');

        await page.keyboard.press('PageDown');
        await page.keyboard.press('PageDown');

        await colorsList.selectOption(['Red', 'Blue', 'Green']);
        await expect(colorsList).toHaveValues(['red', 'blue', 'green']);
    });
    test.afterEach('Close Page', async() => {
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});