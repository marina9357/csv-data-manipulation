const rotateMatrixElements = (x: number, y: number, mat: number[][]) => {
    let row = 0;
    let col = 0;
    const matrixDim = x;
    let previous, current;

    // row - Starting row index
    // x - Ending row index
    // col - Starting column index
    // y - Ending column index

    while (row < x && col < y) {
        if (row + 1 == x || col + 1 == y) break;

        previous = mat[row + 1][col];

        for (let i = col; i < y; i++) {
            current = mat[row][i];
            mat[row][i] = previous;
            previous = current;
        }
        row++;

        for (let i = row; i < x; i++) {
            current = mat[i][y - 1];
            mat[i][y - 1] = previous;
            previous = current;
        }
        y--;

        if (row < x) {
            for (let i = y - 1; i >= col; i--) {
                current = mat[x - 1][i];
                mat[x - 1][i] = previous;
                previous = current;
            }
        }
        x--;

        if (col < y) {
            for (let i = x - 1; i >= row; i--) {
                current = mat[i][col];
                mat[i][col] = previous;
                previous = current;
            }
        }
        col++;
    }
    let rotated: number[][] = [];
    // Return rotated matrix
    for (let i = 0; i < matrixDim; i++) {
        rotated[i] = [];
        for (let j = 0; j < matrixDim; j++) {
            rotated[i][j] = mat[i][j];
        }
    }

    return rotated;
};
export default rotateMatrixElements;
