// https://www.freecodecamp.com/challenges/caesars-cipher

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// NOPQRSTUVWXYZABCDEFGHIJKLM

function rot13(str) { // LBH QVQ VG!

  arr = str.split(" ");
  var decodedWords = [];

  arr.forEach(function(element){
    var encodedWordArray = element.split("");
    var decodedWordArray = [];

    encodedWordArray.forEach(function(encodedWordChar){
      switch(encodedWordChar){
        case "A":
          decodedWordArray.push("N");
          break;
        case "B":
          decodedWordArray.push("O");
          break;
        case "C":
          decodedWordArray.push("P");
          break;
        case "D":
          decodedWordArray.push("Q");
          break;
        case "E":
          decodedWordArray.push("R");
          break;
        case "F":
          decodedWordArray.push("S");
          break;
        case "G":
          decodedWordArray.push("T");
          break;
        case "H":
          decodedWordArray.push("U");
          break;
        case "I":
          decodedWordArray.push("V");
          break;
        case "J":
          decodedWordArray.push("W");
          break;
        case "K":
          decodedWordArray.push("X");
          break;
        case "L":
          decodedWordArray.push("Y");
          break;
        case "M":
          decodedWordArray.push("Z");
          break;
        case "N":
          decodedWordArray.push("A");
          break;
        case "O":
          decodedWordArray.push("B");
          break;
        case "P":
          decodedWordArray.push("C");
          break;
        case "Q":
          decodedWordArray.push("D");
          break;
        case "R":
          decodedWordArray.push("E");
          break;
        case "S":
          decodedWordArray.push("F");
          break;
        case "T":
          decodedWordArray.push("G");
          break;
        case "U":
          decodedWordArray.push("H");
          break;
        case "V":
          decodedWordArray.push("I");
          break;
        case "W":
          decodedWordArray.push("J");
          break;
        case "X":
          decodedWordArray.push("K");
          break;
        case "Y":
          decodedWordArray.push("L");
          break;
        case "Z":
          decodedWordArray.push("M");
          break;
        case "!":
          decodedWordArray.push("!");
          break;
        case "?":
          decodedWordArray.push("?");
          break;
        case ".":
          decodedWordArray.push(".");
          break;
      }
    });

    var decodedWordString = decodedWordArray.join("");
    decodedWords.push(decodedWordString);
  });

  str = decodedWords.join(" ");
  return str;
}

rot13("SERR PBQR PNZC");
