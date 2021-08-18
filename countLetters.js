const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (theSentence) {
  const results = {};
  let sentenceArr = theSentence.split(" ").join("").split("");

  for (const letter of sentenceArr) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

// TEST CASES

let sentence = "lighthouse in the house";
let resultingObject = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

let expected = countLetters(sentence);

assertEqual(expected["l"], resultingObject["l"]);
