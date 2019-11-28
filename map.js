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
};

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); //true

const numbers = [1, 2, 3, 4, 5, 6]
assertArraysEqual(map(numbers, number => number), [1, 2, 3, 4, 5]) //false

const lighthouse = ['lighthouse', 'in', 'the', 'sea'];
assertArraysEqual(map(lighthouse, string => string[2]), ['g', , 'e', 'a']); //true