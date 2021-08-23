
const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
    it("does not change the first tail function array", () => {
      const words = ["Yo Yo", "Lighthouse", "Labs"];
      tail(words);
      assert.equal(words.length, 3);
    });
  it("returns length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result.length, 2);
  });

  it("returns 'Labs' for the second element in ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[1], 'Labs');
  });


});
