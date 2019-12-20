function reverse(input) {
    if (typeof input !== "string") {
        throw new Error("Bad Input: string expected")
    }
    if (input.length > 0) {
        var charArray = [...input];
        var last = charArray[charArray.length - 1]
        charArray.splice(charArray.length - 1, 1);
        return last.concat(reverse(charArray.join('')));
    }
    return input;
}

function equal(a, b) {
    if (typeof a !== "string" || typeof b !== "string") {
        throw new Error("Bad Input: string expected")
    }
    if (a.length !== b.length) {
        return false;
    }
    var aArr = [...a];
    var bArr = [...b];
    for (var i = 0; i < aArr.length; i++) {
        if (aArr[i] !== bArr[i])
            return false;
    }
    return true;
}

module.exports = { reverse, equal };