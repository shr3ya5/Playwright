import { test as base, expect } from '@playwright/test';
import { FirstClassExample } from '../pages/FirstClassFile';
import appConfig from '../data/AppConfig.json';

export type SimpleFixture = {
    firstClassExample: FirstClassExample;
};

export const test = base.extend<SimpleFixture>({
    firstClassExample: async ({ page }, use) => {
        const pom = new FirstClassExample(page);
        await pom.navigateToPage(appConfig.url);
        await use(pom);
    },
});

export { expect };
