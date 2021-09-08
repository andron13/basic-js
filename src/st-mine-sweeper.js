/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let field = [];
    for (let i = 0; i < matrix.length; i++) {
        field[i] = matrix[i].slice();
        for (let j = 0; j < matrix[i].length; j++) {
            field[i][j] = countBombe(matrix, i, j);
        }
    }
    return field;
}

function countBombe(matrix, i, j) {
    let rangeTop = j, rangeRight = i, rangeBottom = j, rangeLeft = i;
    if (j !== 0) rangeTop = j - 1;
    if (j !== matrix[i].length - 1) rangeBottom = j + 1;
    if (i !== 0) rangeLeft = i - 1;
    if (i !== matrix.length - 1) rangeRight = i + 1;

    let count = 0;

    for (let k = rangeLeft; k <= rangeRight; k++) {
        for (let l = rangeTop; l <= rangeBottom; l++) {
            if (k === i && l === j) {
                continue;
            }
            if (matrix[k][l]) {
                count++;
            }
        }
    }
    return count;
}

