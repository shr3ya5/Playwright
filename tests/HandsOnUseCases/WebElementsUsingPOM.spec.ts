import {test,expect} from '@playwright/test';
import {FirstClassExample} from '../../pages/FirstClassFile';
import fileNames from '../../data/FileNames.json';

test.describe('Interacting with all web elements', () => {

    test('TC-01: Web Elements Interaction @POM1', async({page}) => {
       let url = "https://testautomationpractice.blogspot.com/"; 
       let singleFile = fileNames.singleFile;
       let multipleFiles = fileNames.multipleFiles;
       const firstClassExample = new FirstClassExample(page);
       await test.step('Navigate to the Page', async() => {
            await firstClassExample.navigateToPage(url);
       });
       await test.step('Enter all the input boxes', async() => {
            await firstClassExample.allTextInputs();
       });
       await test.step('Validate the input fields', async() => {
            await firstClassExample.validateallTextInputs();
       });
       await test.step('Enter other fields on the page', async() => {
            await firstClassExample.CommonFunction();
       });
       await test.step('Upload files on the page', async() => {
            await firstClassExample.uploadInputFiles(singleFile,multipleFiles);
       });
       await test.step('Final Step reached', async() => {
            console.log(`All steps executed successfully !`);
       }); 
    });
});