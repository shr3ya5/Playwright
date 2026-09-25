# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\FileUploadsDownloads.spec.ts >> File Uploads and Downloads >> TC-02: File Download Sample Docs
- Location: tests\HandsOnUseCases\FileUploadsDownloads.spec.ts:39:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
=========================== logs ===========================
  "domcontentloaded" event fired
  "load" event fired
============================================================
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
  13 |         let configurationDD = page.locator('li').filter({hasText: "Configuration"}).first();
  14 |         let dataImportOption = page.getByText('Data Import');
  15 |         let fileInput = page.locator('input[type="file"]');
  16 |         let uploadButton = page.getByRole('button', {name: /Upload/});
  17 |         let popupOKButton = page.getByRole('button', {name: /Ok/});
  18 |         //Login
  19 |         await page.goto(url,{waitUntil: 'networkidle'});
  20 |         await usernameInput.fill(username);
  21 |         await passwordInput.fill(password);
  22 |         await loginButton.click();
  23 |         await page.waitForLoadState('networkidle');
  24 |         await PIMTab.waitFor({state: 'visible'});
  25 |         //Navigate to PIM tab
  26 |         await PIMTab.click();
  27 |         await page.waitForLoadState('networkidle');
  28 |         await configurationDD.waitFor({state: 'visible'});
  29 |         await configurationDD.click();
  30 |         await dataImportOption.click();
  31 |         //Upload File
  32 |         await page.waitForLoadState('networkidle');
  33 |         await fileInput.waitFor({state: 'attached'});
  34 |         await fileInput.setInputFiles('./data/importData.csv');
  35 |         await uploadButton.click();
  36 |         await popupOKButton.waitFor({state: "visible"});
  37 |         await popupOKButton.click();
  38 |     });
  39 |     test('TC-02: File Download Sample Docs', async( {page} ) => {
  40 |         let url = "https://opensource-demo.orangehrmlive.com/";
  41 |         let username = "Admin";
  42 |         let password = "admin123";
  43 |         let usernameInput = page.getByPlaceholder('Username');
  44 |         let passwordInput = page.getByPlaceholder('Password');
  45 |         let loginButton = page.getByRole('button', { name: /Login/ });
  46 |         let PIMTab = page.getByRole('link', {name: /PIM/});
  47 |         let configurationDD = page.locator('li').filter({hasText: "Configuration"}).first();
  48 |         let dataImportOption = page.getByText('Data Import');
  49 |         let downloadLink = page.getByRole('link', {name: "Download"});
  50 |         
  51 |         //Login
  52 |         await page.goto(url,{waitUntil: 'networkidle'});
  53 |         await usernameInput.fill(username);
  54 |         await passwordInput.fill(password);
  55 |         await loginButton.click();
  56 |         await page.waitForLoadState('networkidle');
  57 |         //Navigate to PIM tab
  58 |         await PIMTab.waitFor({state: 'visible'});
  59 |         await PIMTab.click();
  60 |         await page.waitForLoadState('networkidle');
  61 |         await configurationDD.waitFor({state: 'visible'});
  62 |         await configurationDD.click();
  63 |         await dataImportOption.waitFor({state: 'visible'});
  64 |         await dataImportOption.click();
> 65 |         await page.waitForLoadState('networkidle');
     |                    ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  66 |         await downloadLink.waitFor({state: 'visible'});
  67 |         //Download File
  68 |         const [download] = await Promise.all([
  69 |             await page.waitForEvent('download'),
  70 |             await downloadLink.click()
  71 |         ]);
  72 |         let filePath = await download.path();
  73 |         await expect(fs.existsSync(filePath!)).toBeTruthy();
  74 |         console.log(`Downloaded file: ${filePath}`);
  75 |     });
  76 | });
```