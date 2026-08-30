import * as XLSX from "xlsx";
import path from "path";


export function readExcelData(sheetName: string) {

    const filePath = path.join(
        process.cwd(),
        "testdata",
        "data.xlsx"
    );

    // Read Excel file
    const workbook = XLSX.readFile(filePath);

    // Get worksheet
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
        throw new Error(`Sheet '${sheetName}' not found`);
    }

    // Convert Excel data into JSON
    const data = XLSX.utils.sheet_to_json(worksheet);

    return data;
}