import { test, expect } from '@playwright/test';
test.describe('Allure Report Tests', () => {
  test('Allure Report Generation with embedded screenshot for wikipedia page', async ({ page }, testInfo) => {
        await page.goto('https://www.wikipedia.org');
        await expect(page).toHaveTitle(/Wikipedia/);
        // Capture a screenshot and attach it to the Allure report
        const screenshot = await page.screenshot();
        testInfo.attach('screenshot', {
            body: screenshot,
            contentType: 'image/png',
        });
    });
  });