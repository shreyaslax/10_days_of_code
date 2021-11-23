var N = prompt("Enter N: ");

function printNumbersSquare(N) {
    var length =  2 * N - 1;
    var matrix = new Array(length);
 
    for (var i = 0; i < length; i++) {
        matrix[i] = new Array(length);
        for (var j = 0; j < length; j++) {
                matrix[i][j] = Math.max(Math.abs(i-parseInt(length/2, 10)),
                                        Math.abs(j-parseInt(length/2, 10)))+1;
            }
        }
 
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length; j++) {
                document.write(matrix[i][j] + " ");
            }
             document.write("</br>");
        }
}
     
printNumbersSquare(N);