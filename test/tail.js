
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['4'] for ['5', '4']", () => {
    assert.deepEqual(tail(['5', '4']), ['4']); 
  });
});

