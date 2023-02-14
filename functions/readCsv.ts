import * as fs from 'fs';
import { parse } from 'csv-parse';
import { CsvData } from './../types';

const readCsvFile = (file: string): Promise<CsvData[]> => {
    let data: CsvData[] = [];
    return new Promise((resolve) => {
        let readStream = fs.createReadStream(file).pipe(
            parse({
                delimiter: ',',
                columns: true,
            }),
        );
        readStream.on('data', (row: CsvData) => {
            data.push(row);
        });
        readStream.on('error', (error) => {
            console.error(error);
        });
        return readStream.on('end', () => {
            resolve(data);
        });
    });
};

export default readCsvFile;
