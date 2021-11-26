function plusMinus() {

    var arraySize = prompt("Enter array size: ");

    var numbersArray = [];

    var positive_count = 0;
    var negative_count = 0;
    var zero_count = 0;

    for (var index = 0; index < arraySize; index++) {
        numbersArray.push(prompt("Enter array element: "));
        if (numbersArray[index] == 0) {
            zero_count += 1;
        } else if (numbersArray[index] > 0) {
            positive_count += 1;
        } else {
            negative_count += 1;
        }
    }

    console.log("Positive value ratio: " + (positive_count / arraySize).toFixed(6));
    console.log("Negative value ratio: " + (negative_count / arraySize).toFixed(6));
    console.log("Zero ratio: " + (zero_count / arraySize).toFixed(6));
}

plusMinus();
    


