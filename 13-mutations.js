// https://www.freecodecamp.com/challenges/mutations

function mutation(arr) {
  var firstString = arr.shift().toLowerCase();
  var secondString = arr.pop().toLowerCase();
  var secondStringArray = secondString.split("");

  while (secondStringArray.length !== 0) {
    var firstChar = secondStringArray.shift();
    if (firstString.includes(firstChar)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
