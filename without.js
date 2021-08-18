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
  let cleanedArray = [...source];

  for (let i=0;i < cleanedArray.length; i++){
        let x = source.indexOf(itemsToRemove[i])
        if(x > -1){
            cleanedArray.splice(x, 1)            
        }
        
    }
    return cleanedArray
};  

// console.log(without([1, 2, 3, 4], [1,4]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])) // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


for (let planet in planetMoons){
    let numberofMoons = planetMoons[planet]
    console.log(`${planet} has ${numberofMoons} fr`)
    }
    