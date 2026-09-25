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
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('listitem', { name: 'Data Import' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: Demo Source
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - listitem [ref=f2e132] [cursor=pointer]:
            - generic [ref=f2e133]:
              - text: Configuration
              - generic [ref=f2e134]: 
            - menu [ref=f2e135]:
              - listitem [ref=f2e136]:
                - menuitem "Optional Fields" [ref=f2e137]
              - listitem [ref=f2e138]:
                - menuitem "Custom Fields" [ref=f2e139]
              - listitem [ref=f2e140]:
                - menuitem "Data Import" [ref=f2e141]
              - listitem [ref=f2e142]:
                - menuitem "Reporting Methods" [ref=f2e143]
              - listitem [ref=f2e144]:
                - menuitem "Termination Reasons" [ref=f2e145]
          - listitem [ref=f2e146] [cursor=pointer]:
            - link "Employee List" [ref=f2e147]:
              - /url: "#"
          - listitem [ref=f2e148] [cursor=pointer]:
            - link "Add Employee" [ref=f2e149]:
              - /url: "#"
          - listitem [ref=f2e150] [cursor=pointer]:
            - link "Reports" [ref=f2e151]:
              - /url: "#"
          - button "" [ref=f2e153] [cursor=pointer]
  - generic [ref=f2e155]:
    - generic [ref=f2e157]:
      - generic [ref=f2e158]:
        - generic [ref=f2e159]:
          - heading "Employee Information" [level=5] [ref=f2e161]
          - button "" [ref=f2e164] [cursor=pointer]
        - separator [ref=f2e166]
        - generic [ref=f2e168]:
          - generic [ref=f2e170]:
            - generic [ref=f2e172]:
              - generic [ref=f2e173]: Employee Name
              - textbox "Type for hints..." [ref=f2e178]
            - generic [ref=f2e180]:
              - generic [ref=f2e181]: Employee Id
              - textbox [ref=f2e184]
            - generic [ref=f2e186]:
              - generic [ref=f2e187]: Employment Status
              - generic [ref=f2e191] [cursor=pointer]:
                - generic [ref=f2e192]: "-- Select --"
                - generic [ref=f2e193]: 
            - generic [ref=f2e196]:
              - generic [ref=f2e197]: Include
              - generic [ref=f2e201] [cursor=pointer]:
                - generic [ref=f2e202]: Current Employees Only
                - generic [ref=f2e203]: 
            - generic [ref=f2e206]:
              - generic [ref=f2e207]: Supervisor Name
              - textbox "Type for hints..." [ref=f2e212]
            - generic [ref=f2e214]:
              - generic [ref=f2e215]: Job Title
              - generic [ref=f2e219] [cursor=pointer]:
                - generic [ref=f2e220]: "-- Select --"
                - generic [ref=f2e221]: 
            - generic [ref=f2e224]:
              - generic [ref=f2e225]: Sub Unit
              - generic [ref=f2e229] [cursor=pointer]:
                - generic [ref=f2e230]: "-- Select --"
                - generic [ref=f2e231]: 
          - separator [ref=f2e233]
          - generic [ref=f2e234]:
            - button "Reset" [ref=f2e235] [cursor=pointer]
            - button "Search" [ref=f2e236] [cursor=pointer]
      - generic [ref=f2e237]:
        - button " Add" [ref=f2e239] [cursor=pointer]:
          - generic [ref=f2e240]: 
          - text: Add
        - table [ref=f2e242]
    - generic [ref=f2e247]:
      - paragraph [ref=f2e248]: OrangeHRM OS 5.9
      - paragraph [ref=f2e249]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e250] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
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
  14 |         let dataImportOption = page.getByRole('listitem', {name: "Data Import"});
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
> 28 |         await dataImportOption.click();
     |                                ^ Error: locator.click: Test timeout of 60000ms exceeded.
  29 |         //Upload File
  30 |         await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/pimCsvImport');
  31 |         await fileInput.setInputFiles('./data/importData.csv');
  32 |         await uploadButton.click();
  33 |         await popupOKButton.waitFor({state: "visible"});
  34 |         await popupOKButton.click();
  35 |     });
  36 | });
```