const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const yourArray = ['hey', 'you', 'there'];
tail(yourArray); // no need to capture the return value since we are not checking it
assertEqual(yourArray.length, 3); // original array should still have 3 elements!

