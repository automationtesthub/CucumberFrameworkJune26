import { Before } from "@cucumber/cucumber";
import { getTestData } from "../utilities/TestData";

Before(function (scenario) {

    this.scenarioName = scenario.pickle.name;

    console.log("=================================");
    console.log("Scenario:", this.scenarioName);

    this.testData = getTestData(this.scenarioName);

    console.log("Excel Data:", this.testData);
    console.log("=================================");
});

