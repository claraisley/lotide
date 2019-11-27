const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.toLowerCase().split(" ").join("");

  for (let i = 0; i < noSpaces.length; i++) {
    const letter = noSpaces[i];
    if (results.hasOwnProperty(letter) === false) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  return results;
}

console.log(letterPositions("hello"))
const eqArrays = function(a, b) {
  let i = a.length;
  if (i != b.length) return false;
  
  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅✅✅Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: ${a} === ${b}`);
  }
}

assertArraysEqual(letterPositions("hello").e, [1]);

