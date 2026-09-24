import {test,expect, Browser, Page, chromium} from '@playwright/test';
import { randomFill } from 'crypto';
import { add } from 'winston';

test.describe('Interacting with all web elements', () => {

    let browser: Browser;
    let context: any;
    let page: Page;
    test.beforeAll('Initialize Browser', async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
    });
    test('TC-01: Web Elements Interaction @WE', async() => {
        let url = "https://testautomationpractice.blogspot.com/";
        let name = page.getByPlaceholder('Enter Name');
        let email = page.getByPlaceholder('Enter EMail');
        let phone = page.getByPlaceholder('Enter Phone'); 
        let address = page.getByLabel('Address:'); 
        let gender = page.getByLabel('Female');
        let Monday = page.getByLabel('Monday');
        let Tuesday = page.getByLabel('Tuesday');
        let Wednesday = page.getByLabel('Wednesday');
        let countryDD = page.getByLabel('Country:');
        let colorsDD = page.getByLabel('Colors:');
        let sortedList = page.getByLabel('Sorted List:');
        let datePicker1 = page.locator('#datepicker');
        let datePicker2 = page.locator('#txtDate');
        let anyDate = page.locator('a[data-date="24"]');
        let uploadFile = page.locator('#singleFileInput');
        let uploadMultipleFiles = page.locator('#multipleFilesInput');
        let tableRow = await page.locator('table[name="BookTable"] tbody tr').nth(2).allInnerTexts();

        const phoneNumber = Math.floor(
                                100000000 + Math.random() * 900000000
                            ).toString();

        await page.goto(url, {waitUntil: 'networkidle'});
        await name.fill('Test test');
        await email.fill('Test@test.com');
        await phone.fill(phoneNumber);
        await address.fill('Whatever street');
        await gender.check();
        await Monday.check();
        await Tuesday.check();
        await Wednesday.check();
        await countryDD.selectOption('India');
        await colorsDD.selectOption(['Red', 'White']);
        let actualList = await sortedList.allInnerTexts(); 
        let expectedList = await actualList.sort();
        await expect(expectedList).toEqual(actualList);
        await datePicker1.fill('07/08/2001');
        await datePicker2.click();
        await anyDate.click();
        console.log(`Static Table Row content: ${tableRow}`);

        await uploadFile.setInputFiles('./data/Push_Playwright_Code_to_GitHub_Step_by_Step.txt');
        await uploadMultipleFiles.setInputFiles([
            './data/loginData.csv',
            './data/loginData.json'
        ]);

    });
    test.afterAll('Cleanup', async() => {
        await page.close();
        await context.close();
        await browser.close();
    });

});