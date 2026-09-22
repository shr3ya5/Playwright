import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';
test.describe('Google Search @google', () => {
    
    let url = "https://www.google.com";
    let logo : Locator;
    let signInButton : Locator;
    let searchBox: Locator;
    let page: Page;
    let browser: Browser;
    let searchResults: Locator;

    test.beforeAll('Initialize Browser', async() => {
        browser = await chromium.launch();
    });
    test.beforeEach('Initialize Page', async() => {
        page = await browser.newPage();
        await page.goto(url);
        await page.waitForLoadState('networkidle');
    });
    // Verify search page elements
    test('TS-01: Identify elements on google search', {tag: '@smoke'}, async () => {
        
        logo = await page.getByRole('img', { name: 'Google' });
        signInButton = await page.getByRole('link', { name : 'Sign In' });

        const logoAttribute = await logo.getAttribute('aria-label');
        const buttonAttribute = await signInButton.getAttribute('aria-label');

        console.log(`logo attribute: ${logoAttribute}\nsignInButton attribute: ${buttonAttribute}`);
    });
    // Count search results
    test('TS-02: Count results on google search', {tag: ['@smoke','@regression']}, async () => {
        
        await page.goto(url);
        await page.waitForLoadState('networkidle');

        logo = await page.getByRole('img', { name: 'Google' });
        searchBox = await page.locator('textarea[name="q"]');
        signInButton = await page.getByText('Sign in');
        searchResults = await page.locator('li[data-attrid="AutocompletePrediction"]');

        await searchBox.pressSequentially('Cognizant', { delay: 1000});
        await searchResults.last().waitFor({state:'attached'});
        const resultCount = await searchResults.count();
        await searchBox.press('Enter');

        console.log(`Cognizant Search results: ${resultCount}`);
    });
    test.afterEach('Close Page', async() => {
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});