// https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string

function findLongestWord(str) {
  var longest = "";
  var arr     = str.split(" ");
  for (var i  = 0; i < arr.length; i++){
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
