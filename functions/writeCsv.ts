import { writeToPath } from '@fast-csv/format';
import { CsvData } from '../types';

const writeToCsv = (data: CsvData[]) => {
    writeToPath(`${process.argv[3]}`, data, { headers: true }).on('error', (error) => console.error(error));
};

export default writeToCsv;
