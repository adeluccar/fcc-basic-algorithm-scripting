// https://www.freecodecamp.com/challenges/where-do-i-belong

/* we need this compareNumbers function to
avoid Array.sort's Unicode sort */

function compareNumbers (a, b) {
  return a - b
}

function getIndexToIns (arr, num) {
  arr = arr.sort(compareNumbers)

  var i = 0
  while (num > arr[i]) {
    i++
  }

  return i
}

getIndexToIns([60, 40], 50)
