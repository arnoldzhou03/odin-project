const removeFromArray = function(arr, ...targets) {
    for(let target of targets) {
        let position = arr.indexOf(target);
        while(position != -1) {
            arr.splice(position, 1);
            position = arr.indexOf(target);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
