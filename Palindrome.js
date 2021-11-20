var inputString = prompt("Enter the String: ");

var reversedString = '';
for (var index = inputString.length - 1; index > -1; index--) {
    reversedString += inputString[index];
}

if (inputString == reversedString) {
    console.log("The given string " + inputString + " is a Palindrome");
} else {
console.log("The given string " + inputString + " is not a Palindrome");
}