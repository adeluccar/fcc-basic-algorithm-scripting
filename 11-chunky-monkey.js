// https://www.freecodecamp.com/challenges/chunky-monkey

function chunkArrayInGroups (arr, size) {
  var finalArray = []

  while (arr.length > 0) {
    var sliceArray = arr.slice(0, size)
    finalArray.push(sliceArray)

    for (var i = 0; i < size; i++) {
      arr.shift()
    }
  }

  return finalArray
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 3)
