import readCsvFile from './functions/readCsv';
import writeToCsv from './functions/writeCsv';
import getMatrix from './functions/createMatrix';
import rotateMatrixElements from './functions/rotateMatrix';
import { CsvData } from './types';

const rotateCsvData = async () => {
    // Read the input.csv
    let csvData = await readCsvFile(process.argv[2]);

    // Get the matrix display, rotate the numbers in matrix and return the desired csv data (id, json, is_valid)
    let outputData = csvData.map((data: CsvData) => {
        // Get only the json column
        let onlyJson = JSON.parse(data?.json);

        let matrixLength = getMatrix(onlyJson).length;

        let rotatedArray: Array<Array<number>> = [];
        if (matrixLength > 0) {
            // If the matrix length is even and matrix is bigger then 2X2
            if (matrixLength % 2 === 0 || matrixLength >= 3) {
                rotatedArray = rotateMatrixElements(matrixLength, matrixLength, getMatrix(onlyJson));
            } else {
                rotatedArray = getMatrix(onlyJson);
            }
        } else {
            rotatedArray = [];
        }
        return { ...data, json: `[${rotatedArray.flat()}]`, is_valid: matrixLength > 0 ? true : false };
    });

    // Write the data to output.csv
    writeToCsv(outputData);
};
rotateCsvData();
