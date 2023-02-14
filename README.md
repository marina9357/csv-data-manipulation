# CSV Data manipulation

## Libraries:

-   `csv-parse` - for reading the data from the csv file (I have tried the csv-stream (that you have recommended) but I have some problems with reading the file (id was undefined) so I used another library for reading the csv file)
-   `fast-csv` - for writing the data to csv file (I have used writeToPath because when I tried write(outputData).pipe(process.stdout); in output.csv file i get the data without id and json )

## Available Scripts

In the project directory, you can run:

### `yarn ts-node cli.ts input.csv output.csv`
