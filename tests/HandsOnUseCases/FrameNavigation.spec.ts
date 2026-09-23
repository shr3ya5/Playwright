import { test, expect, Locator } from '@playwright/test';
import { chromium, Page, Browser } from '@playwright/test';

test.describe('Frame Navigations @Frames', () => {
    
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
    test('TS-01: Print Frame Info', {tag: '@smoke'}, async () => {
        url = "https://www.tutorialspoint.com/selenium/practice/frames.php";
        await page.goto(url, {waitUntil: 'domcontentloaded'});
        
        let Frame1Header = await page.locator('//div[./h1[text()="Frames"]]/h2').first();
        let Frame2Header = await page.locator('//div[./h1[text()="Frames"]]/h2').last();

        console.log(`Frame1 Header: ${await Frame1Header.innerText()}`);
        console.log(`Frame2 Header: ${await Frame2Header.innerText()}`);
       
    });
    test('TS-02: Print Frame Info', {tag: '@smoke'}, async () => {
        url = "https://www.tutorialspoint.com/selenium/practice/frames.php";
        await page.goto(url, {waitUntil: 'domcontentloaded'});
        
        let Frames = await page.frames();
        for(const frame of Frames){
            console.log(`Frame Name: ${frame.name()}`);
            console.log(`Frame URL: ${frame.url()}`);
            console.log(`Frame Content: ${await frame.locator('body').innerText()}`);
        }
       
    });
    test.afterEach('Close Page', async() => {
        await page.close();
    });
    test.afterAll('Close Browser', async() => {
        await browser.close();
    });
});