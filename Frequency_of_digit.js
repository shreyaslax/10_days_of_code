var number = prompt("Enter the Number: ");
var digit = prompt("Enter the digit: ");

var digits_Of_Splitted_Number  = number.split("");

var frequencyOfDigit = 0;
for(var i = 0; i < digits_Of_Splitted_Number.length; i++) {
    if (digits_Of_Splitted_Number[i] == digit) {
        frequencyOfDigit++;
    }
}

console.log("Digit frequency of the given digit is " + frequencyOfDigit);