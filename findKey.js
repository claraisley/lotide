const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key]) === true){
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    (actual !== expected);
    console.log(`🚫🚫🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma"




// const findKey = function(object, callback) {
//   // console.log('object: ', object);
//   for (let key in object) {
//     // console.log(key)

//     // console.log(object[key])
//     if (callback(object[key]) === true) {
//       return key;
//     }
//   }
// };




// const object = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }

// const key = findKey(object, x => x.stars === 2) // => "noma"

// console.log("found " + key)