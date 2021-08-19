const takeUntil = function(array, callback) {
    // ...
    const sliced = []
    for (item of array){
        // if callback(item) is true, then push item into sliced
            if (!callback(item)){
                sliced.push(item)
            }
            else {
                return sliced
            }
    }

    return sliced
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);