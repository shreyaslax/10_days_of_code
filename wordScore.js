var numberOfWords = prompt("Enter number of words in String: ");
var string = prompt("Enter the String: ");

string.split(" ");
var wordsArray = [];
for (var index = 0; index < string.length; index++) {
    wordsArray.push([string[index]]);
}

var wordScores = [];
for (var element = 0; element < wordsArray.length; element++) {
    var word = (wordsArray[element]).toString().split(",");
    var count = 0;
    for (var letter = 0; letter < word.length; letter++) {
        if (word[letter] == 'a' || word[letter] == 'e' || word[letter] == 'i' || word[letter] == 'o' || word[letter] == 'u') {
            count += 1;
            if (count % 2 == 0) {
                wordScores.push(2)
            } else {
                wordScores.push(1);
            }
        }
    }
}

var totalWordScore = 0;
for (var index = 0; index < wordScores.length; index++) {
    totalWordScore += wordScores[index];
}
console.log(totalWordScore);



