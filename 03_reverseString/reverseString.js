const reverseString = function(string) {
    let array = string.split("");
    let reverseArray = [];
    for (i = array.length-1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    const reverseString = reverseArray.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
