function rangeIter(start, end) {
    if (!start || typeof start !== 'number') {
        throw new TypeError(start + ' is not a number');
    }

    if (!end || typeof end !== 'number') {
        throw new TypeError(end + ' is not a number');
    }

    var arr = [];
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    return arr;
}

module.exports = rangeIter;