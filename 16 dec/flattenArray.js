var flattenArray = function (input) {
    var output = [];
    if (!Array.isArray(input)) {
        throw new Error('Invalid Input: input should be an array');
    }
    for (var i = 0; i < input.length; i++) {
        if (Array.isArray(input[i])) {
            output.push(...flattenArray(input[i]));
        } else {
            output.push(input[i]);
        }
    }
    return output;
}

module.exports = flattenArray;