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

assertArraysEqual(['a'], ['a']);
assertArraysEqual(['a'], ['b']);