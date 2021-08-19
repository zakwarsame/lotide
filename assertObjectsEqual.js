const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  const eqArrays = function (arrOne, arrTwo) {
    if (arrOne.length !== arrTwo.length) {
      return false;
    } else {
      for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] === arrTwo[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  const eqObjects = function (object1, object2) {
    let obj1 = Object.keys(object1);
    let obj2 = Object.keys(object2);
    if (obj1.length === obj2.length) {
      for (let item of obj1) {
        if (object1[item] !== object2[item]) {
          // if they're not equal BUT there is an array
          if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
            console.log(object2[item]);
            return eqArrays(object1[item], object2[item]);
          }
          return false;
        }
      }
      return true;
    }
    return false;
  };



const assertEqualObjects = function(object1, object2) {
    const inspect = require("util").inspect;
    if (eqObjects(object1, object2)) {
      console.log(
        `✅️✅️✅️ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
      );
    } else {
      console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
      );
    }
  };

  