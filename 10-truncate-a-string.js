// https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString (str, num) {
  var lessThanThree

  if (str.length <= num) {
    return str
  }

  if (num <= 3) {
    lessThanThree = 0
  } else {
    lessThanThree = 3
  }

  var truncatedString = str.slice(0, num - lessThanThree)

  if (str.length > num) {
    return truncatedString + '...'
  } else {
    return truncatedString
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)
