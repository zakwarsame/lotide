const assertArraysEqual = require('./assertArraysEqual')

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


module.exports = middle;
