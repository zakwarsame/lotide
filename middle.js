const assertArraysEqual = function (arr1, arr2){
    if (eqArrays(arr1, arr2)) {
        console.log(`✅️✅️✅️Assertion Passed: [${arr1}] === [${arr2}]`);
      } else {
        console.log(`🛑🛑🛑Assertion Failed: [${arr1}] !== [${arr2}]`);
      }
    }
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

const middle = function (arr){
    let middleArr = []
    if (arr.length <= 2){
        return 'array elements should be more than 2';
    }
    else if (arr.length % 2 !== 0){
       let index = (parseInt(arr.length/2))
       middleArr.push(arr[index])
       return middleArr
    }
    else if (arr.length % 2 === 0){
        let index1 = (parseInt((arr.length/2)-1))
        let index2 = (parseInt(arr.length/2))
        middleArr.push(arr[index1])
        middleArr.push(arr[index2])
        return middleArr
    }

}

assertArraysEqual(middle([1,2,3,4,5]), [3])