const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    (actual !== expected);
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(yourArray){
  return yourArray.shift();
};





assertEqual(head([1, 4, 5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");