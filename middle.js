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
    console.log(`✅✅✅Assertion Passed: [${a}] === [${b}]`);
  } else {
    console.log(`🚫🚫🚫Assertion Failed: [${a}] === [${b}]`);
  }
};

const middle = function(array) {

  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let i = array.length/2;
    return [array[i -1], array[i]];
  } else {
    let i = Math.floor(array.length / 2);
    return [array[i]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5 ,6, 7]), [4]);
assertArraysEqual(middle([1, 2]), []);
