const repeatString = function(str, numReps) {
    if(numReps < 0) return "ERROR";
    let ans = "";
    for(let i = 0; i < numReps; i++) ans += str;
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
