
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it("returns 'array elements should be more than 2' for [0, 1]", () => {
    assert.deepEqual(middle([0,1]), 'array elements should be more than 2'); 
  });

});
