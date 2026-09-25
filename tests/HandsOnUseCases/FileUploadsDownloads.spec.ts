import {test,expect} from '@playwright/test';
import fs from 'fs';
test.describe('File Uploads and Downloads', () => {

    test('TC-01: File Upload Orange HRM', async( {page} ) => {
        let url = "https://opensource-demo.orangehrmlive.com/";
        let username = "Admin";
        let password = "admin123";
        let usernameInput = page.getByPlaceholder('Username');
        let passwordInput = page.getByPlaceholder('Password');
        let loginButton = page.getByRole('button', { name: /Login/ });
        let PIMTab = page.getByRole('link', {name: /PIM/});
        let configurationDD = page.locator('li').filter({hasText: "Configuration"}).first();
        let dataImportOption = page.getByText('Data Import');
        let fileInput = page.locator('input[type="file"]');
        let uploadButton = page.getByRole('button', {name: /Upload/});
        let popupOKButton = page.getByRole('button', {name: /Ok/});
        //Login
        await page.goto(url,{waitUntil: 'networkidle'});
        await usernameInput.fill(username);
        await passwordInput.fill(password);
        await loginButton.click();
        await page.waitForLoadState('networkidle');
        await PIMTab.waitFor({state: 'visible'});
        //Navigate to PIM tab
        await PIMTab.click();
        await configurationDD.waitFor({state: 'visible'});
        await configurationDD.click();
        await dataImportOption.click();
        //Upload File
        await fileInput.setInputFiles('./data/importData.csv');
        await uploadButton.click();
        await popupOKButton.waitFor({state: "visible"});
        await popupOKButton.click();
    });
    test('TC-02: File Download Sample Docs', async( {page} ) => {
        let url = "https://opensource-demo.orangehrmlive.com/";
        let username = "Admin";
        let password = "admin123";
        let usernameInput = page.getByPlaceholder('Username');
        let passwordInput = page.getByPlaceholder('Password');
        let loginButton = page.getByRole('button', { name: /Login/ });
        let PIMTab = page.getByRole('link', {name: /PIM/});
        let configurationDD = page.locator('li').filter({hasText: "Configuration"}).first();
        let dataImportOption = page.getByText('Data Import');
        let downloadLink = page.getByRole('link', {name: "Download"});
        
        //Login
        await page.goto(url,{waitUntil: 'networkidle'});
        await usernameInput.fill(username);
        await passwordInput.fill(password);
        await loginButton.click();
        await page.waitForLoadState('networkidle');
        //Navigate to PIM tab
        await PIMTab.waitFor({state: 'visible'});
        await PIMTab.click();
        await page.waitForLoadState('networkidle');
        await configurationDD.waitFor({state: 'visible'});
        await configurationDD.click();
        await dataImportOption.waitFor({state: 'visible'});
        await dataImportOption.click();
        //Download File
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            downloadLink.click()
        ]);
        let filePath = await download.path();
        await expect(download.suggestedFilename()).toContain('.csv');
        await expect(fs.existsSync(filePath!)).toBeTruthy();
        console.log(`Downloaded file: ${download.suggestedFilename()}`);
    });
});