var arraySize = prompt("Enter the Array Size: ");

var arrayElements = prompt("Enter the Array: ").split(" ");

var reversedArray = '';
for(var index = arraySize - 1; index > -1; index--){
    reversedArray += ' ' + arrayElements[index];
}

console.log(reversedArray);