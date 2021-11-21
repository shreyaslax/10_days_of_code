var arraySize = prompt("Enter the Array Size: ");
var array = prompt("Enter the Array: ").split(" ");
var element_to_search = prompt("Enter element to be searched: ");

for(var index = 0; index < arraySize; index++) {
    if (array[index] == element_to_search) {
        break;
    } 
}
if (index < arraySize) {
    console.log("Element is present at index " + index);
} else {
    console.log("Element not found in the array");
}

