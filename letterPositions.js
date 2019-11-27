const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results.hasOwnProperty(letter) === false) {
      if(letter !== " ") {
      results[letter] = [i];
      }
    } else {
      results[letter].push(i);
    }
  }
  return results;
}


console.log(letterPositions("lighthouse in the house"))
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
    console.log(`🚫🚫🚫Assertion Failed: ${a} !== ${b}`);
  }
}

assertArraysEqual(letterPositions("hello").e, [1]);

