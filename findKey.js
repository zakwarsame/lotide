const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function (obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const hills = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

findKey(hills, (x) => x.stars === 6);

assertEqual(
  findKey(hills, (x) => x.stars === 2),
  "noma"
);
// assertEqual( findKey(hills, x => x.stars === 5), undefined);
