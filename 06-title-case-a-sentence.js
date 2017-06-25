// https://www.freecodecamp.com/challenges/title-case-a-sentence

function titleCase(str) {
  var finalArray = [];
  var wordsArray = str.split(" ");

  wordsArray.forEach(function(word){
    var lowerWord = word.toLowerCase();
    var wordArray = lowerWord.split("");
    var lowerChar = wordArray.shift();
    var upperChar = lowerChar.toUpperCase();
    wordArray.unshift(upperChar);
    var finalWord = wordArray.join("");
    finalArray.push(finalWord);
  });

  return finalArray.join(" ");
}

titleCase("a test string");
