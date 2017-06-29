// https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

function repeatStringNumTimes (str, num) {
  if (num < 0) {
    return ''
  }
  return str.repeat(num)
}

repeatStringNumTimes('abc', -3)
