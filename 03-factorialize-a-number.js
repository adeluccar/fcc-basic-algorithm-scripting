// https://www.freecodecamp.com/challenges/factorialize-a-number

function factorialize (num) {
  if (num === 0) {
    return 1
  }

  var array = []

  for (var c = 1; c <= num; c++) {
    array.push(c)
  }
  return array.reduce(
    function (acum, val) {
      return acum * val
    }
  )
}

factorialize(5)
