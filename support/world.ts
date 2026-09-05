import {
    setWorldConstructor,
    World,
    IWorldOptions
} from "@cucumber/cucumber";

import { Browser, BrowserContext, Page } from '@playwright/test';
import { PageObjectManager } from "../manager/PageObjectManager";

export class CustomWorld extends World {

    scenarioName!: string;
    testData: any;

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    pom!: PageObjectManager;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);