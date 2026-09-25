import {test,expect} from '@playwright/test';
import {FirstClassExample} from '../../pages/FirstClassFile';

test.describe('Interacting with all web elements', () => {

    test('TC-01: Web Elements Interaction @POM1', async({page}) => {
       const firstClassExample = new FirstClassExample(page);
       await firstClassExample.CommonFunction();
    });
});