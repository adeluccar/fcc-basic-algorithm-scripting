// https://www.freecodecamp.com/challenges/check-for-palindromes

function palindrome(str) {
  cleanString        = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  reverseString      = cleanString.split("").reverse().join("");
  return cleanString == reverseString ? true : false;
}

palindrome("eye");
