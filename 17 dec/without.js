function without(a, b) {
    if (a.length === 0)
        return b;
    var pos = b.indexOf(a[0]);
    while (pos >= 0) {
        b.splice(pos, 1);
        pos = b.indexOf(a[0]);
    }
    a = a.slice(1);
    return without(a, b);
}

module.exports = without;