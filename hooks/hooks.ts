
import { getTestData } from "../utilities/TestData";
import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { PageObjectManager } from "../manager/PageObjectManager";

Before(async function (scenario) {

    this.scenarioName = scenario.pickle.name;

    console.log("=================================");
    console.log("Scenario:", this.scenarioName);

    this.testData = getTestData(this.scenarioName);

    console.log("Excel Data:", this.testData);
    console.log("=================================");

    const isHeadless = process.env.HEADLESS !== 'false';

    this.browser = await chromium.launch({
        headless: isHeadless
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
    this.pom = new PageObjectManager(this.page);
});


After(async function (this: CustomWorld) {

    await this.browser.close();

});

