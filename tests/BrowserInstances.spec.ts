import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test.describe('Try creating browser insatnces', () => {

    test('Chromium Instance', async () => {

        const browserInstance1 = await chromium.launch({headless: false});
        const browserInstance2 = await chromium.launch({headless: false});

        const context11 = await browserInstance1.newContext();
        const context12 = await browserInstance2.newContext();

        const page111 = await context11.newPage();
        const page112 = await context11.newPage();

        const page114 = await browserInstance2.newPage();
        const page115 = await context12.newPage();

        await page111.goto('https://www.google.com');
        await page111.waitForLoadState('networkidle');
        //await page111.waitForSelector('input[name="q"]');

        await page112.goto('https://www.facebook.com');
        await page112.waitForLoadState('networkidle');
        await page112.waitForURL(/facebook/);

        await page114.goto('https://www.bing.com');
        await page114.waitForLoadState('networkidle');
        await page114.waitForURL('https://www.bing.com/');

        await page115.goto('https://www.irctc.com');
        await page115.waitForLoadState('networkidle');

        await browserInstance1.close();
        await browserInstance2.close();

    });

});