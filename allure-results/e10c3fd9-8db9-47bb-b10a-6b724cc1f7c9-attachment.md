# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\FileUploadsDownloads.spec.ts >> File Uploads and Downloads >> TC-01: File Upload Orange HRM
- Location: tests\HandsOnUseCases\FileUploadsDownloads.spec.ts:5:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('input[type="file"]')

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import fs from 'fs';
  3  | test.describe('File Uploads and Downloads', () => {
  4  | 
  5  |     test('TC-01: File Upload Orange HRM', async( {page} ) => {
  6  |         let url = "https://opensource-demo.orangehrmlive.com/";
  7  |         let username = "Admin";
  8  |         let password = "admin123";
  9  |         let usernameInput = page.getByPlaceholder('Username');
  10 |         let passwordInput = page.getByPlaceholder('Password');
  11 |         let loginButton = page.getByRole('button', { name: /Login/ });
  12 |         let PIMTab = page.getByRole('link', {name: /PIM/});
  13 |         let configurationDD = page.locator('span').filter({hasText: "Configuration"}).first();
  14 |         let dataImportOption = page.getByText('Data Import');
  15 |         let fileInput = page.locator('input[type="file"]');
  16 |         let uploadButton = page.getByRole('button', {name: /Upload/});
  17 |         let popupOKButton = page.getByRole('button', {name: /Ok/});
  18 |         //Login
  19 |         await page.goto(url,{waitUntil: 'networkidle'});
  20 |         await usernameInput.fill(username);
  21 |         await passwordInput.fill(password);
  22 |         await loginButton.click();
  23 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  24 |         //Navigate to PIM tab
  25 |         await PIMTab.click();
  26 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  27 |         await configurationDD.click();
  28 |         await dataImportOption.click();
  29 |         //Upload File
  30 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/pimCsvImport');
> 31 |         await fileInput.setInputFiles('./data/importData.csv');
     |         ^ Error: locator.setInputFiles: Test timeout of 60000ms exceeded.
  32 |         await uploadButton.click();
  33 |         await popupOKButton.waitFor({state: "visible"});
  34 |         await popupOKButton.click();
  35 |     });
  36 |     test('TC-02: File Download Sample Docs', async( {page} ) => {
  37 |         let url = "https://opensource-demo.orangehrmlive.com/";
  38 |         let username = "Admin";
  39 |         let password = "admin123";
  40 |         let usernameInput = page.getByPlaceholder('Username');
  41 |         let passwordInput = page.getByPlaceholder('Password');
  42 |         let loginButton = page.getByRole('button', { name: /Login/ });
  43 |         let PIMTab = page.getByRole('link', {name: /PIM/});
  44 |         let configurationDD = page.locator('span').filter({hasText: "Configuration"}).first();
  45 |         let dataImportOption = page.getByText('Data Import');
  46 |         let downloadLink = page.getByRole('link', {name: "Download"});
  47 |         
  48 |         //Login
  49 |         await page.goto(url,{waitUntil: 'networkidle'});
  50 |         await usernameInput.fill(username);
  51 |         await passwordInput.fill(password);
  52 |         await loginButton.click();
  53 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  54 |         //Navigate to PIM tab
  55 |         await PIMTab.click();
  56 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  57 |         await configurationDD.click();
  58 |         await dataImportOption.click();
  59 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/pimCsvImport');
  60 |         //Download File
  61 |         
  62 |         let downloadPromise = await page.waitForEvent('download');
  63 |         await downloadLink.click();
  64 |         let download = await downloadPromise;
  65 |         let filePath = await download.path();
  66 |         await expect(fs.existsSync(filePath!)).toBeTruthy();
  67 |         console.log(`Downloaded file: ${filePath}`);
  68 |     });
  69 | });
```