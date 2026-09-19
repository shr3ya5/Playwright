import {test,expect} from '@playwright/test';
import {chromium, Browser, Page} from '@playwright/test';

test.describe('Visual Regression Tests', () => {

    let browser: Browser;
    let context: any;
    let page: Page;

    test.beforeEach('Precondition Executes Before Each', async() => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
    });

    test('Visual Regression Test for google', async () => {
        await page.goto('https://www.google.com');
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveScreenshot('google.png', {maxDiffPixelRatio: 0.5, threshold: 0.2});
    });

    test('Visual Regression Test for wikipedia', async () => {
        await page.goto('https://www.wikipedia.org');
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveScreenshot('wikipedia.png', {maxDiffPixelRatio: 0.5, threshold: 0.2});
    });

    test.afterEach('Postcondition Executes After Each', async() => {
        await page.close();
        await context.close();
        await browser.close();
    });    
});