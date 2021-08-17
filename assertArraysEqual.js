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

const assertArraysEqual = function (arr1, arr2){
    if (eqArrays(arr1, arr2)) {
        console.log(`✅️✅️✅️Assertion Passed: [${arr1}] === [${arr2}]`);
      } else {
        console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
      }
}