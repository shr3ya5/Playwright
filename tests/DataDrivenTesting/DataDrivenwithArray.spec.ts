import {test, expect, Browser, chromium, Page} from '@playwright/test';

test.describe('Data Driven Tests with Array', () => {
    // Launch the browser and create a new page
    let browser: Browser;
    let page: Page;
    let context: any;
    const loginData = [
            { username: 'Admin', password: 'admin123' },
            { username: 'Admin', password: 'wrongpassword' },
            { username: 'WrongUser', password: 'admin123' },
            { username: '', password: 'admin123' },
            { username: 'Admin', password: '' },
            { username: '', password: '' }
    ];
    // Before all tests, you can perform any setup required for the test suite
    test.beforeAll('Set up', async () => {
        browser = await chromium.launch({ headless: process.env.CI ? true : false});
    });
    // Before each test
    test.beforeEach('Precondition', async () => {
        context = await browser.newContext();
        page = await context.newPage();
    });
     // Close the page and browser after each test
    test.afterEach('Postcondition', async ()=> {
        await page.close();
        await context.close();
    }) 
    test.afterAll('Clean up', async () => {
        await browser?.close();
    })
    // For loop for data driven tests
    loginData.forEach((data, index) => {
        test(`Login Tests with Arrays Data Driven Approach - Test ${index + 1}`, async () => {
            // Navigate to the Orange HRM login page and perform login actions
            await test.step('Navigate to Orange HRM Login Page', async () => {
                await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded'});
                await page.waitForSelector('input[name="username"]');
                await expect(page).toHaveTitle(/OrangeHRM/);
        });
            await test.step('Perform login with credentials', async () => {
                await page.fill('input[name="username"]', data.username);
                await page.fill('input[name="password"]', data.password);
                await page.click('button[type="submit"]');
                await page.waitForLoadState('networkidle');
                
                // Only expect dashboard for valid credentials
                if (data.username === 'Admin' && data.password === 'admin123') {
                    await expect(await page.locator('h6')).toHaveText('Dashboard');
                    await page.screenshot({ path: `screenshots/ Test ${index + 1}_success.png` });
                } else {
                    // Handle invalid login scenarios
                    await page.screenshot({ path: `screenshots/ Test ${index + 1}_failed.png` });
                }
            });
        });
    });
});