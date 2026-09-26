import { test } from '../../fixtures/SimpleFixture';
import fileNames from '../../data/FileNames.json';

test.describe('Interacting with all web elements using fixture', () => {

    test('TC-01: Web Elements Interaction via fixture @POMFixture', async ({ firstClassExample }) => {
       const singleFile = fileNames.singleFile;
       const multipleFiles = fileNames.multipleFiles;

       await test.step('Enter all the input boxes', async() => {
            await firstClassExample.allTextInputs();
       });
       await test.step('Validate the input fields', async() => {
            await firstClassExample.validateallTextInputs();
       });
       await test.step('Check radios and checkboxes', async() => {
            await firstClassExample.checkRadiosAndBoxes();
       });
       await test.step('Select dropdowns', async() => {
            await firstClassExample.selectDropdowns();
       });
       await test.step('Verify Sorted List', async() => {
            await firstClassExample.verifySortedList();
       });
       await test.step('Select Dates', async() => {
            await firstClassExample.selectDates();
       });
       await test.step('Upload files on the page', async() => {
            await firstClassExample.uploadInputFiles(singleFile, multipleFiles);
       });
       await test.step('Print Table Row content', async() => {
            await firstClassExample.printTableRow();
       });
       await test.step('Final Step reached', async() => {
            console.log('All steps executed successfully via fixture!');
       }); 
    });
});
