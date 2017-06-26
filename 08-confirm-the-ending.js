// https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding(str, target) {
  var targetLength  = target.length;
  var lastString    = str.substr(length - targetLength);
  return lastString == target ? true : false;
}

confirmEnding("Bastia", "n");
