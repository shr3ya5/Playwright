import {Page, Locator, expect} from '@playwright/test';
import {generatePhoneNumber} from '../tests/utils/CommonlyUsedFunctions';

export class FirstClassExample {
    private readonly page: Page;
    //private readonly url: string;
    private readonly name: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly address: Locator;
    private readonly gender: Locator;
    private readonly Monday: Locator;
    private readonly Tuesday: Locator;
    private readonly Wednesday: Locator;
    private readonly countryDD: Locator;
    private readonly colorsDD: Locator;
    private readonly sortedList: Locator;
    private readonly datePicker1: Locator;
    private readonly datePicker2: Locator;
    private readonly anyDate: Locator;
    private readonly uploadFile: Locator;
    private readonly uploadMultipleFiles: Locator;
    private readonly tableRow: Locator;

    constructor(page: Page){
        this.page = page;
        //this.url = "https://testautomationpractice.blogspot.com/";
        this.name = page.getByPlaceholder('Enter Name');
        this.email = page.getByPlaceholder('Enter EMail');
        this.phone = page.getByPlaceholder('Enter Phone'); 
        this.address = page.getByLabel('Address:'); 
        this.gender = page.getByLabel('Female');
        this.Monday = page.getByLabel('Monday');
        this.Tuesday = page.getByLabel('Tuesday');
        this.Wednesday = page.getByLabel('Wednesday');
        this.countryDD = page.getByLabel('Country:');
        this.colorsDD = page.getByLabel('Colors:');
        this.sortedList = page.getByLabel('Sorted List:');
        this.datePicker1 = page.locator('#datepicker');
        this.datePicker2 = page.locator('#txtDate');
        this.anyDate = page.locator('a[data-date="24"]');
        this.uploadFile = page.locator('#singleFileInput');
        this.uploadMultipleFiles = page.locator('#multipleFilesInput');
        this.tableRow = page.locator('table[name="BookTable"] tbody tr').nth(2);
    }

    // Navigate to the page 
    async navigateToPage(url: string){
        //Navigate to page
        await this.page.goto(url, {waitUntil: 'domcontentloaded'});
        await expect(this.page).toHaveTitle('Automation Testing Practice', {timeout:20000});
    }
    async allTextInputs(){
        //use util function to get the phone number
        const phoneNumber = generatePhoneNumber();

        // Input values in all text boxes
        await this.name.fill('Test test');
        await this.email.fill('Test@test.com');
        await this.phone.fill(phoneNumber);
        await this.address.fill('Whatever street');

    }
    async validateallTextInputs(){
        await expect(this.name).toBeVisible();
        await expect(this.email).toBeEnabled();
        await expect(this.phone).not.toBeEmpty();
        let addressText = await this.address.inputValue();
        await expect(addressText).toBe('Whatever street');
    }
    async uploadInputFiles(singleFile: string, multipleFiles: string[]){
        //Upload files
        await this.uploadFile.setInputFiles(singleFile);
        await this.uploadMultipleFiles.setInputFiles(multipleFiles);
    }
    async checkRadiosAndBoxes(){
         //Select RADIO AND CHECKBOXES
        await this.gender.check();
        await expect(this.gender).toBeChecked();
        await this.Monday.check();
        await this.Tuesday.check();
        await this.Wednesday.check();
    }
    async selectDropdowns(){

        //Select Dropdowns
        await this.countryDD.selectOption('India');
        await this.colorsDD.selectOption(['Red', 'White']);
        await expect(this.colorsDD).toContainText('Red');
    }
    async verifySortedList(){

        //Sort lists and verify sort order
        let actualList = await this.sortedList.allInnerTexts(); 
        let expectedList = await actualList.sort();
        await expect(expectedList).toEqual(actualList);
    }
    async selectDates(){

         //Select dates
        await this.datePicker1.fill('07/08/2001');
        await this.datePicker2.click();
        await this.anyDate.click();
    }
    // Function for interacting with all elements on the page
    async printTableRow(){

        //Log something from table row in console
        let TableContents = (await this.tableRow.allInnerTexts()).toString().replace(/[\n\r\s]+/g,' ');
        console.log(`Static Table Row content: ${TableContents}`);
    }
};