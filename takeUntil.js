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

const takeUntil = function(array, callback) {

  const foundElement = [];
  for (let element of array){
    if (callback(element) === true){
      return foundElement;
    }
    foundElement.push(element);
  }
  return foundElement;
}


const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(takeUntil(words, element => element === "major"), ["ground", "control", "to"]); //true

const numbers = [1, 2, 3, 4, 5, 6]
assertArraysEqual(takeUntil(numbers, element => element === 3), [1, 2]) //true

const lighthouse = ['lighthouse', 'in', 'the', 'sea'];
assertArraysEqual(takeUntil(lighthouse, string => string === "in"), ['lighthouse']); //true