const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅️✅️✅️Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };


const eqArrays = function (arrOne, arrTwo){
    if (arrOne.length !== arrTwo.length){
        return false
    } else {
        
        for (i=0;i<arrOne.length;i++){
        if (arrOne[i]===arrTwo[i]){
            return true
        }
        else{
            return false
        }
        }
    }
}



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 