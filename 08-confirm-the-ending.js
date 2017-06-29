// https://www.freecodecamp.com/challenges/confirm-the-ending

function confirmEnding (str, target) {
  var targetLength = target.length
  var lastString = str.substr(str.length - targetLength)
  return lastString === target
}

confirmEnding('Bastia', 'n')
