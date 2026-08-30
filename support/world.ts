import {
    setWorldConstructor,
    World,
    IWorldOptions
} from "@cucumber/cucumber";

export class CustomWorld extends World {

    scenarioName!: string;
    testData: any;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);