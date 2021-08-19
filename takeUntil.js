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

const takeUntil = function(array, callback) {
    // ...
    const sliced = []
    for (item of array){
        // if callback(item) is false, then push item into sliced
            if (!callback(item)){
                sliced.push(item)
            }
        // stop as soon as there is a truthy
            else {
                return sliced
            }
    }

    return sliced
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]
);
