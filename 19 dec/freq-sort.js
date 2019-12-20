function frequencySort(a) {
    var freqMap = {};
    if (!Array.isArray(a))
        throw new Error('Bad Input: Expecting an array');
    a.map(e => {
        if (!freqMap[e])
            freqMap[e] = 0;
        freqMap[e]++;
    });
    a = new Set(a);
    return (Array.from(a).sort((x, y) => freqMap[x] < freqMap[y]));
}

module.exports = frequencySort;