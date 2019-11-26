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
};

const flatten = function(array) {
 let newArray = [];
 array.forEach(function(element){
   if (array.isArray(element)=== false){
     newArray.push(element);
   } else {
     for (let i = 0; i < element.length; i++) {
       newArray.push(element[i]);
     }
   }
 });
 return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));