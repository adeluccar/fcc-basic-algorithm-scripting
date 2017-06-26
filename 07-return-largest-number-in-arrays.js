// https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  var finalArray = [];

  arr.forEach(function(subArray){
    var max = Math.max(...subArray);
    finalArray.push(max);
  });

  return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
