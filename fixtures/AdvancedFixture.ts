import { test as base, expect } from '@playwright/test';
import { FirstClassExample } from '../pages/FirstClassFile';
import appConfig from '../data/AppConfig.json';
import fileNames from '../data/FileNames.json';

export type AdvancedFixture = {
    firstClassExample: FirstClassExample;
    testUrl: string;
    singleFile: string;
    multipleFiles: string[];
};

export const test = base.extend<AdvancedFixture>({
    testUrl: async ({}, use) => {
        await use(appConfig.url);
    },

    singleFile: async ({}, use) => {
        await use(fileNames.singleFile);
    },

    multipleFiles: async ({}, use) => {
        await use(fileNames.multipleFiles);
    },

    firstClassExample: async ({ page }, use) => {
        const pom = new FirstClassExample(page);
        await pom.navigateToPage(appConfig.url);
        await use(pom);
    },
});

export { expect };
