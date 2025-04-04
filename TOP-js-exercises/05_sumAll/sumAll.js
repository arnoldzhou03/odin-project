const sumAll = function(lo, hi) {
    if(!Number.isInteger(lo) || !Number.isInteger(hi) || lo < 0 || hi < 0) return "ERROR";
    if(lo > hi) {
        let temp = lo;
        lo = hi;
        hi = temp;
    }
    let sum = 0;
    for(let val = lo; val <= hi; val++) sum += val;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
