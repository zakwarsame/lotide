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




const without = (source, itemsToRemove) => {
  let cleanedArray = [];

    for (var i=0; i<itemsToRemove.length; i++){
        if(source.indexOf(itemsToRemove[i]) == -1){
            cleanedArray.push(itemsToRemove[i])
        }
    }
    return cleanedArray
};    

// without(["1", "2", "3", 5, 6, 6, 6], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


