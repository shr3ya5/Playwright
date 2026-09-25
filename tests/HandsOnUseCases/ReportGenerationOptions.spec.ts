import {test,expect, Browser, Page, chromium} from '@playwright/test';

test.describe('Report Generation Example', () => {
    
    test('TC-01: Report Generation Make My Trip @MMT', async({page}) => {
        
        let url = "https://www.makemytrip.com/";
        let roundTripRadio = page.getByText('Round Trip');
        let FlightsTab = page.locator('li[data-cy="menu_Flights"]');
        let From = page.getByLabel('From');
        let FromInput = page.getByRole('textbox', { name: 'From', exact: true });
        let ToInput = page.getByRole('textbox', { name: 'To', exact: true });
        let FromOption = page.locator('li').filter({hasText: "New Delhi, India"});
        let To = page.getByLabel('To');
        let ToOption = page.locator('li').filter({hasText: "Bengaluru, India"});
        let departureDate = page.locator('div[aria-disabled="false"][role="gridcell"]').nth(2);
        let returnDate = page.locator('div[aria-disabled="false"][role="gridcell"]').last();
        let searchButton = page.locator('a').filter({hasText: "Search"});
        let AIExpressFirstFlight = page.locator('div[class="flightCard__mainRow"]').filter({hasText: "Air India Express"}).first();
        let departTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock"] span[class="flightCard__time"]');
        let arrivalTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__timeBlock flightCard__timeBlock--arr"] span[class="flightCard__time"]');
        let totalJourneyTime = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="boldFont"]');
        let journeyType = AIExpressFirstFlight.locator('div[class="flightCard__journeyRow"] div[class="flightCard__mid flightCard__mid--stops"] p[class="flightsLayoverInfo"]'); 
        let closeModal = page.locator('div section[data-cy="CommonModal_2"] span[data-cy="closeModal"]');
        
        await test.step('Navigate to Make My Trip', async () => {
                await page.goto(url, {waitUntil: "domcontentloaded"});
        });
        await test.step('Handle popup', async () => {
            await closeModal.waitFor({state: "visible"});
            await closeModal.click();
        });
        await test.step('Click on Flights', async () => {
            await FlightsTab.click();
        });
        await test.step('Click on Round Trip button', async () => {
            await roundTripRadio.waitFor({state: "visible"});
            await roundTripRadio.click();
        });
        await test.step('Enter From', async () => {
            await From.click();
            await FromInput.pressSequentially('Delhi', {delay: 500});
            await FromOption.click();
        });
        await test.step('Enter To', async () => {
            await To.click();
            await ToInput.pressSequentially('Bengaluru', {delay: 500});
            await ToOption.click();
        });
        await test.step('Select departure and arrival dates', async () => {
            await departureDate.hover();
            await departureDate.click();
            await returnDate.hover();
            await returnDate.click();
        });
        await test.step('Click on Search', async () => {
            await Promise.all([
                AIExpressFirstFlight.waitFor({state: "visible"}),
                searchButton.click()
            ]);
        });
        await test.step('Print Flight Details for First AI Express Flight', async () => {
            console.log(`Flight Details: ${await departTime.innerText()}, ${await arrivalTime.innerText()}, 
                                    +       ${await totalJourneyTime.innerText()}, ${await journeyType.innerText()}`);
        });
    });
});