function isomorphic([a, b]) {
    // this map stores a one-to-one mapping of characters from a to b
    const map = {};
    if (
        typeof a !== 'string' ||
        typeof b !== 'string' ||
        a.length !== b.length
    ) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (!map[a[i]])
            map[a[i]] = b[i];
        if (b[i] !== map[a[i]])
            return false;
    }
    return true;
}

module.exports = isomorphic;
