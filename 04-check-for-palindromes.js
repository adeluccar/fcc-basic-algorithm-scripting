// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome (str) {
  var cleanString = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  var reverseString = cleanString.split('').reverse().join('')
  return cleanString === reverseString
}

palindrome('eye')
