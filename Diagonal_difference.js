var rowsOrColumns = prompt("Enter the number of rows or columns: ");

var matrix = [];
for (var i = 0; i < rowsOrColumns; i++) {
    matrix[i] = new Array(rowsOrColumns);
}

for (var row = 0; row < rowsOrColumns; row++) {
    for (var column = 0; column < rowsOrColumns; column++) {
        matrix[row][column] = parseInt(prompt(""));
    } 
}

var leftToRight_Diagonal_Sum = 0;
var RightToLeftDiagonalSum = 0;
for (var row = 0; row < rowsOrColumns; row++) {
    for (var column = 0; column < rowsOrColumns; column++) {
        if (row === column) {
            leftToRight_Diagonal_Sum += matrix[row][column];
        }
        if (row + column == rowsOrColumns - 1) {
            RightToLeftDiagonalSum += matrix[row][column];
        }
    } 
}

console.log(Math.abs(leftToRight_Diagonal_Sum - RightToLeftDiagonalSum));