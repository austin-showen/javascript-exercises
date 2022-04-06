const removeFromArray = function() {
    const args = Array.from(arguments);
    const inputArray = args[0];
    let outputArray = [];
    const argsToRemove = args.slice(1, args.length);
    for (i = 0; i < inputArray.length; i++) {
        if (argsToRemove.indexOf(inputArray[i]) === -1) {
            outputArray.push(inputArray[i]);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
