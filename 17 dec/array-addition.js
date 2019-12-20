function addAddition(a, b, modified = false) {
    if (!Array.isArray(a) || !Array.isArray(b))
        throw new Error('bad input non array');
    if (!modified && (a.length === 0 || b.length === 0))
        throw new Error('bad input empty array');
    modified = true;
    if (a.length === 0 && b.length === 0)
        return [];
    if (a.length === 0)
        a.push(0);
    if (b.length === 0)
        b.push(0);
    if ((typeof a[0] !== 'number') || (typeof b[0] !== 'number'))
        throw new Error('bad input type');
    return [a[0] + b[0], ...addAddition(a.slice(1), b.slice(1), modified)];
}

module.exports = addAddition;