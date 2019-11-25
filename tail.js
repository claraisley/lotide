const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    (actual !== expected);
    console.log(`🚫🚫🚫Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(yourArray) {
  return yourArray.slice(1);
  
};




// Test Case: Check the original array
const yourArray = ['hey'];
tail(yourArray); // no need to capture the return value since we are not checking it
assertEqual(yourArray.length, 3); // original array should still have 3 elements!

console.log(tail(yourArray));