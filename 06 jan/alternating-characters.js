function alternatingCharacters(arr) {
    var output = [];
    arr.forEach(str => {
        output.push(deletionsNeeded(str));
    });
    return output;
}

function deletionsNeeded(str) {
    if (str.length < 2) {
        return 0;
    }
    return (str[0] === str[1] ? 1 : 0) + deletionsNeeded(str.slice(1));
}

module.exports = alternatingCharacters;
