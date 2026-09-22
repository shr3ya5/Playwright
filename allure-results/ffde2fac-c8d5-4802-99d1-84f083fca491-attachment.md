# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandsOnUseCases\GoogleSearch.spec.ts >> Google Search @google >> TS-01: Identify elements on google search
- Location: tests\HandsOnUseCases\GoogleSearch.spec.ts:11:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Google Search' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e24]
  - search [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e36]:
        - button "Add files and tools" [ref=e41] [cursor=pointer]
        - combobox "Search" [active] [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e48]:
            - button "Search by voice" [ref=e51] [cursor=pointer]
            - button "Search by image" [ref=e56] [cursor=pointer]
          - link "AI Mode" [ref=e59] [cursor=pointer]
      - generic [ref=e73]:
        - button "Create images" [ref=e74] [cursor=pointer]:
          - generic [aria-hidden] [ref=e75]: 🍌
        - button "Ask about files" [ref=e77] [cursor=pointer]
        - button "Brainstorm" [ref=e82] [cursor=pointer]
        - button "I am feeling lucky" [ref=e87] [cursor=pointer]
  - generic [ref=e91]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e92] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCCk
    - link "বাংলা" [ref=e93] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCCo
    - link "తెలుగు" [ref=e94] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCCs
    - link "मराठी" [ref=e95] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCCw
    - link "தமிழ்" [ref=e96] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCC0
    - link "ગુજરાતી" [ref=e97] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCC4
    - link "ಕನ್ನಡ" [ref=e98] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCC8
    - link "മലയാളം" [ref=e99] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCDA
    - link "ਪੰਜਾਬੀ" [ref=e100] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_JYGDNBga2ko4OYsYqNRMJpKEPH0%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiopI_DtoGXAxUcieEIHepRETAQ2ZgBCDE
  - contentinfo [ref=e102]:
    - generic [ref=e103]: India
    - generic [ref=e104]:
      - generic [ref=e105]:
        - link "Advertising" [ref=e106] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e107] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e108] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e109]:
        - link "Privacy" [ref=e110] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e111] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e115] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect, Locator, Page} from '@playwright/test';
  2  | test.describe('Google Search @google', () => {
  3  |     
  4  |     let url = "https://www.google.com";
  5  |     let logo : Locator;
  6  |     let searButton : Locator;
  7  |     let searchBox: Locator;
  8  |     let page: Page;
  9  | 
  10 |     // Verify search page elements
  11 |     test('TS-01: Identify elements on google search', {tag: '@smoke'}, async ({page}) => {
  12 |         
  13 |         await page.goto(url);
  14 |         await page.waitForLoadState('networkidle');
  15 | 
  16 |         logo = await page.getByRole('img', { name: 'Google' });
  17 |         searButton = await page.getByRole('button', { name: 'Google Search' })
  18 | 
  19 |         const logoAttribute = await logo.getAttribute('aria-label');
> 20 |         const buttonAttribute = await searButton.getAttribute('aria-label');
     |                                                  ^ Error: locator.getAttribute: Test timeout of 60000ms exceeded.
  21 | 
  22 |         console.log(`logo attribute: ${logoAttribute}\nsearchButton attribute: ${buttonAttribute}`);
  23 |     });
  24 |     // Count search results
  25 |     test('TS-02: Count results on google search', {tag: '@smoke'}, async ({page}) => {
  26 |         
  27 |         await page.goto(url);
  28 |         await page.waitForLoadState('networkidle');
  29 | 
  30 |         logo = await page.getByRole('img', { name: 'Google' });
  31 |         searchBox = await page.locator('textarea[name="q"]');
  32 |         searButton = await page.getByRole('button', { name: 'Google Search' })
  33 | 
  34 |         await searchBox.pressSequentially('Cognizant');
  35 |         await searchBox.press('Enter');
  36 |     });
  37 | 
  38 | });
```