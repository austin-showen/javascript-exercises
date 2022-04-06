const sumAll = function(start, end) {
    if (typeof(start) != "number" 
            || typeof(end) != "number"
            || start < 0
            || end < 0) {
        return "ERROR";
    }

    if (start > end) {
        let placeholder = start;
        start = end;
        end = placeholder;
    }

    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
