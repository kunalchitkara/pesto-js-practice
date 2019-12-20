function argsString(str, arr) {
    try {
        var pos = str.indexOf('{}');
        if (pos >= 0) {
            if (arr.length === 0)
                throw new Error('bad input too few arguments');
            return argsString(str.replace("{}", arr[0]), arr.slice(1))
        }
        return str;
    } catch (err) {
        throw err;
    }
}

module.exports = argsString;