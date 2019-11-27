const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🚫🚫🚫Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };








const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
  return false;
  } 
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let result = eqArrays(object1[key], object2[key]);
      if (result === false){
        return false;
      }
    } else if (object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

assertObjectsEqual({1: "1", 2: "2"}, {3: "3", 4: "4"}, false);

assertObjectsEqual({1: "1", 2: "2"}, {1: "1", 2: "2"}, true);
