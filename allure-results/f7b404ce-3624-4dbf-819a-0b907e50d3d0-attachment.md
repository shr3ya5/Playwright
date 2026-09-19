# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DataDrivenwithArray.spec.ts >> Data Driven Tests with Array >> Login Tests with Data Driven Approach - Test 2
- Location: tests\DataDrivenwithArray.spec.ts:33:13

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForSelector: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[name="username"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: manda user
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Sep 14 - Sep 20
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e194] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e196]:
        - generic [ref=f1e198]:
          - generic [ref=f1e199]: 
          - paragraph [ref=f1e200]: Quick Launch
        - separator [ref=f1e201]
        - generic [ref=f1e203]:
          - generic [ref=f1e204]:
            - button "Assign Leave" [ref=f1e205] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e208]:
              - paragraph [ref=f1e209]: Assign Leave
          - generic [ref=f1e210]:
            - button "Leave List" [ref=f1e211] [cursor=pointer]
            - generic "Leave List" [ref=f1e218]:
              - paragraph [ref=f1e219]: Leave List
          - generic [ref=f1e220]:
            - button "Timesheets" [ref=f1e221] [cursor=pointer]
            - generic "Timesheets" [ref=f1e227]:
              - paragraph [ref=f1e228]: Timesheets
          - generic [ref=f1e229]:
            - button "Apply Leave" [ref=f1e230] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e233]:
              - paragraph [ref=f1e234]: Apply Leave
          - generic [ref=f1e235]:
            - button "My Leave" [ref=f1e236] [cursor=pointer]
            - generic "My Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: My Leave
          - generic [ref=f1e243]:
            - button "My Timesheet" [ref=f1e244] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e247]:
              - paragraph [ref=f1e248]: My Timesheet
      - generic [ref=f1e250]:
        - generic [ref=f1e252]:
          - generic [ref=f1e253]: 
          - paragraph [ref=f1e254]: Buzz Latest Posts
        - separator [ref=f1e255]
        - generic [ref=f1e257]:
          - generic [ref=f1e258]:
            - generic [ref=f1e259] [cursor=pointer]:
              - img "profile picture" [ref=f1e261]
              - generic [ref=f1e262]:
                - paragraph [ref=f1e263]: manda akhil user
                - paragraph [ref=f1e264]: 2026-18-09 06:01 PM
            - separator [ref=f1e265]
            - paragraph [ref=f1e266]: This is a test message.
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: manda akhil user
                - paragraph [ref=f1e273]: 2020-08-10 09:08 AM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f1e276]:
            - generic [ref=f1e277] [cursor=pointer]:
              - img "profile picture" [ref=f1e279]
              - generic [ref=f1e280]:
                - paragraph [ref=f1e281]: Sania Shaheen
                - paragraph [ref=f1e282]: 2020-08-10 09:08 AM
            - separator [ref=f1e283]
            - paragraph [ref=f1e284]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=f1e285]:
            - generic [ref=f1e286] [cursor=pointer]:
              - img "profile picture" [ref=f1e288]
              - generic [ref=f1e289]:
                - paragraph [ref=f1e290]: Rebecca Harmony
                - paragraph [ref=f1e291]: 2020-08-10 09:04 AM
            - separator [ref=f1e292]
            - paragraph [ref=f1e293]: Throwback Thursdays!!
          - generic [ref=f1e295]:
            - generic [ref=f1e296] [cursor=pointer]:
              - img "profile picture" [ref=f1e298]
              - generic [ref=f1e299]:
                - paragraph [ref=f1e300]: Russel Hamilton
                - paragraph [ref=f1e301]: 2020-08-10 09:03 AM
            - separator [ref=f1e302]
            - paragraph [ref=f1e303]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=f1e305]:
        - generic [ref=f1e306]:
          - paragraph [ref=f1e311]: Employees on Leave Today
          - generic [ref=f1e312] [cursor=pointer]: 
        - separator [ref=f1e313]
        - generic [ref=f1e315]:
          - img "profile picture" [ref=f1e317]
          - generic [ref=f1e318]:
            - paragraph [ref=f1e319]: A8DCo 010Z
            - paragraph [ref=f1e320]: CAN - Bereavement
          - paragraph [ref=f1e321]: "0312"
      - generic [ref=f1e323]:
        - generic [ref=f1e325]:
          - generic [ref=f1e326]: 
          - paragraph [ref=f1e327]: Employee Distribution by Sub Unit
        - separator [ref=f1e328]
        - list [ref=f1e333]:
          - listitem [ref=f1e334] [cursor=pointer]:
            - generic "Engineering" [ref=f1e336]
          - listitem [ref=f1e337] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e339]
          - listitem [ref=f1e340] [cursor=pointer]:
            - generic "Administration" [ref=f1e342]
          - listitem [ref=f1e343] [cursor=pointer]:
            - generic "Client Services" [ref=f1e345]
          - listitem [ref=f1e346] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e348]
      - generic [ref=f1e350]:
        - generic [ref=f1e352]:
          - generic [ref=f1e353]: 
          - paragraph [ref=f1e354]: Employee Distribution by Location
        - separator [ref=f1e355]
        - list [ref=f1e360]:
          - listitem [ref=f1e361] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e363]
          - listitem [ref=f1e364] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e366]
          - listitem [ref=f1e367] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e369]
    - generic [ref=f1e370]:
      - paragraph [ref=f1e371]: OrangeHRM OS 5.9
      - paragraph [ref=f1e372]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e373] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import {test, expect, Browser, chromium, Page} from '@playwright/test';
  2  | 
  3  | test.describe('Data Driven Tests with Array', () => {
  4  |     // Launch the browser and create a new page
  5  |     let browser: Browser;
  6  |     let page: Page;
  7  |     let context: any;
  8  |     const loginData = [
  9  |             { username: 'Admin', password: 'admin123' },
  10 |             { username: 'Admin', password: 'wrongpassword' },
  11 |             { username: 'WrongUser', password: 'admin123' },
  12 |             { username: '', password: 'admin123' },
  13 |             { username: 'Admin', password: '' },
  14 |             { username: '', password: '' }
  15 |     ];
  16 |     // Before all tests, you can perform any setup required for the test suite
  17 |     test.beforeAll('Set up', async () => {
  18 |         browser = await chromium.launch({ headless: false });
  19 |         context = await browser.newContext();
  20 |     });
  21 |     // Before each test
  22 |     test.beforeEach('Precondition', async () => {
  23 |         page = await context.newPage();
  24 |     });
  25 |      // Close the page and browser after each test
  26 |     test.afterAll('Clean up', async () => {
  27 |         await page.close();
  28 |         await context.close();
  29 |         await browser.close();
  30 |     })
  31 |     // For loop for data driven tests
  32 |     loginData.forEach((data, index) => {
  33 |         test(`Login Tests with Data Driven Approach - Test ${index + 1}`, async () => {
  34 |             // Navigate to the Orange HRM login page and perform login actions
  35 |             await test.step('Navigate to Orange HRM Login Page', async () => {
  36 |                 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded'});
> 37 |                 await page.waitForSelector('input[name="username"]');
     |                            ^ Error: page.waitForSelector: Target page, context or browser has been closed
  38 |                 await expect(page).toHaveTitle(/OrangeHRM/);
  39 |         });
  40 |             await test.step('Perform login with credentials', async () => {
  41 |                 await page.fill('input[name="username"]', data.username);
  42 |                 await page.fill('input[name="password"]', data.password);
  43 |                 await page.click('button[type="submit"]');
  44 |                 await page.waitForLoadState('networkidle');
  45 |                 
  46 |                 // Only expect dashboard for valid credentials
  47 |                 if (data.username === 'Admin' && data.password === 'admin123') {
  48 |                     await expect(await page.locator('h6')).toHaveText('Dashboard');
  49 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_success.png` });
  50 |                 } else {
  51 |                     // Handle invalid login scenarios
  52 |                     await page.screenshot({ path: `screenshots/ Test ${index + 1}_failed.png` });
  53 |                 }
  54 |             });
  55 |         });
  56 |     });
  57 | });
```