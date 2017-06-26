// https://www.freecodecamp.com/challenges/falsy-bouncer

function bouncer(arr) {
 return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9, null]);
