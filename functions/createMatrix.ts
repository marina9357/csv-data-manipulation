// Get the matrix display

const getMatrix = (array: Array<number>) => {
    let arr: number[][] = [];
    let rows = Math.sqrt(array.length);
    if (rows % 1 === 0) {
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
            for (let j = 0; j < rows; j++) {
                arr[i][j] = array[i * rows + j];
            }
        }
        return arr;
    } else {
        return [];
    }
};

export default getMatrix;
