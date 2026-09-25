# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\FileUploadsDownloads.spec.ts >> File Uploads and Downloads >> TC-02: File Download Sample Docs
- Location: tests\HandsOnUseCases\FileUploadsDownloads.spec.ts:36:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - generic [ref=f3e113]:
            - heading "PIM" [level=6] [ref=f3e114]
            - heading "/ Configuration" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: manda user
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: Configuration
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - link "Employee List" [ref=f3e137]:
              - /url: "#"
          - listitem [ref=f3e138] [cursor=pointer]:
            - link "Add Employee" [ref=f3e139]:
              - /url: "#"
          - listitem [ref=f3e140] [cursor=pointer]:
            - link "Reports" [ref=f3e141]:
              - /url: "#"
          - button "" [ref=f3e143] [cursor=pointer]
  - generic [ref=f3e145]:
    - generic [ref=f3e148]:
      - paragraph [ref=f3e149]: Data Import
      - separator [ref=f3e150]
      - generic [ref=f3e151]:
        - paragraph [ref=f3e152]: "Note:"
        - list [ref=f3e153]:
          - listitem [ref=f3e154]:
            - paragraph [ref=f3e155]: Column order should not be changed
          - listitem [ref=f3e156]:
            - paragraph [ref=f3e157]: First Name and Last Name are compulsory
          - listitem [ref=f3e158]:
            - paragraph [ref=f3e159]: All date fields should be in YYYY-MM-DD format
          - listitem [ref=f3e160]:
            - paragraph [ref=f3e161]: If gender is specified, value should be either Male or Female
          - listitem [ref=f3e162]:
            - paragraph [ref=f3e163]: Each import file should be configured for 100 records or less
          - listitem [ref=f3e164]:
            - paragraph [ref=f3e165]: Multiple import files may be required
          - listitem [ref=f3e166]:
            - paragraph [ref=f3e167]:
              - text: "Sample CSV file :"
              - link "Download" [ref=f3e168] [cursor=pointer]:
                - /url: "#"
      - generic [ref=f3e169]:
        - generic [ref=f3e172]:
          - generic [ref=f3e173]:
            - generic [ref=f3e174]: Select File*
            - generic [ref=f3e176]:
              - button "Choose File"
              - generic [ref=f3e177]:
                - generic [ref=f3e178] [cursor=pointer]: Browse
                - generic [ref=f3e179]: No file selected
                - generic [ref=f3e180] [cursor=pointer]: 
          - paragraph [ref=f3e181]: Accepts up to 1MB
        - separator [ref=f3e182]
        - generic [ref=f3e183]:
          - paragraph [ref=f3e184]: "* Required"
          - button "Upload" [ref=f3e185] [cursor=pointer]
    - generic [ref=f3e186]:
      - paragraph [ref=f3e187]: OrangeHRM OS 5.9
      - paragraph [ref=f3e188]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e189] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  27 |         await configurationDD.waitFor({state: 'visible'});
  28 |         await configurationDD.click();
  29 |         await dataImportOption.click();
  30 |         //Upload File
  31 |         await fileInput.setInputFiles('./data/importData.csv');
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
  44 |         let configurationDD = page.locator('li').filter({hasText: "Configuration"}).first();
  45 |         let dataImportOption = page.getByText('Data Import');
  46 |         let downloadLink = page.getByRole('link', {name: "Download"});
  47 |         
  48 |         //Login
  49 |         await page.goto(url,{waitUntil: 'networkidle'});
  50 |         await usernameInput.fill(username);
  51 |         await passwordInput.fill(password);
  52 |         await loginButton.click();
  53 |         await page.waitForLoadState('networkidle');
  54 |         //Navigate to PIM tab
  55 |         await PIMTab.waitFor({state: 'visible'});
  56 |         await PIMTab.click();
  57 |         await page.waitForLoadState('networkidle');
  58 |         await configurationDD.waitFor({state: 'visible'});
  59 |         await configurationDD.click();
  60 |         await dataImportOption.waitFor({state: 'visible'});
  61 |         await dataImportOption.click();
  62 |         //Download File
  63 |         const [download] = await Promise.all([
> 64 |             await page.waitForEvent('download'),
     |                        ^ Error: page.waitForEvent: Test timeout of 60000ms exceeded.
  65 |             await downloadLink.click()
  66 |         ]);
  67 |         let filePath = await download.path();
  68 |         await expect(fs.existsSync(filePath!)).toBeTruthy();
  69 |         console.log(`Downloaded file: ${filePath}`);
  70 |     });
  71 | });
```