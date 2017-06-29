// https://www.freecodecamp.com/challenges/seek-and-destroy

function destroyer () {
  var args = [].slice.call(arguments) // extract arguments obj into array
  var targetArray = args.shift() // extract the initial array from args

  args.forEach(function (arg) {
    targetArray = targetArray.filter(function (item) {
      return item !== arg
    })
  })

  return targetArray
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
