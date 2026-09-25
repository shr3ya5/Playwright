import {test,expect, Browser, Page, chromium} from '@playwright/test';

test.describe('Interacting with all web elements', () => {

    let browser: Browser;
    let context: any;
    let page: Page;
    
    test.beforeAll('Initialize Browser', async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
    });
    test('TC-01: Report Generation Make My Trip @MMT', async() => {
        let url = "https://www.makemytrip.com/";
        let roundTripRadio = page.getByText('Round Trip');
        let FlightsTab = page.locator('li[data-cy="menu_Flights"]');
        let From = page.getByLabel('From');
        let FromOption = page.locator('li').filter({hasText: "New Delhi, India"});
        let To = page.getByLabel('To');
        let ToOption = page.locator('li').filter({hasText: "Bengaluru, India"});
        let departureDate = page.locator('div[aria-disabled="false"][role="gridcell"][class=/DayPicker/]').first();
        let returnDate = page.locator('div[aria-disabled="false"][role="gridcell"][class=/DayPicker/]').last();
        let searchButton = page.locator('p[data-cy="submit"]').filter({hasText:"Search"});
        let AIExpressFirstFlight = page.locator('div[class="flightCard__mainRow"]').filter({hasText: "Air India Express"}).first();
        let departTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock"] span[class="flightCard__time"]');
        let arrivalTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock flightCard__timeBlock--arr"] span[class="flightCard__time"]');
        let totalJourneyTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="boldFont"]');
        let journeyType = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="flightsLayoverInfo"]'); 
        let closeModal = page.locator('div section[data-cy="CommonModal_2"] span[data-cy="closeModal"]');
        
        await page.goto(url, {waitUntil: "domcontentloaded"});
        /*page.on('dialog', async(dialog) => {
            console.log(`Dialog defaultValue: ${dialog.defaultValue}, 
                        + Dialog message: ${dialog.message}, Dialog type: ${dialog.type}`);
            dialog.dismiss();

        });*/
        if(await closeModal.isVisible()){
            await closeModal.click();
        }
        await FlightsTab.click();
        await page.waitForLoadState('networkidle');
        
        await roundTripRadio.click();

        await From.click();
        await From.pressSequentially('Delhi', {delay: 500});
        await FromOption.click();

        await To.click();
        await To.pressSequentially('Bengaluru', {delay: 500});
        await ToOption.click();
        
        await departureDate.click();
        await returnDate.click();
        
        await searchButton.click();
        await page.waitForLoadState('networkidle');

        console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
    
    });
    test.afterAll('Cleanup', async() => {
        await page.close();
        await context.clearCookies();
        await context.close();
        await browser.close();
    });

});