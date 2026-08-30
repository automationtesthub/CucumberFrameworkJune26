import { readExcelData } from "./ExcelReader";

const testData: any[] = readExcelData("Sheet1");

export function getTestData(scenarioName: string) {

    const data = testData.find(
        (row: any) =>
            row.scenarioName.trim() === scenarioName.trim()
    );

    if (!data) {
        throw new Error(
            `Test data not found in Excel for scenario: ${scenarioName}`
        );
    }

    return data;
}