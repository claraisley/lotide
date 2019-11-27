/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    (actual !== expected);
    console.log(`🚫🚫🚫Assertion Failed: ${actual} === ${expected}`);
  }
};*/

const countLetters = function(string) {
  let letterObj = {};
  let noSPaces = string.toLowerCase().split(" ").join("");
  
  for (letter of noSPaces) {
    if (letterObj.hasOwnProperty(letter) === false) {
      letterObj[letter] = 1;
    } else {
      letterObj[letter] = letterObj[letter] + 1;
    }
  }
  return letterObj;
};

console.log(countLetters("Lighthouse in the house"));
console.log(countLetters("aswkejrkfhdjcndejrhdef"));