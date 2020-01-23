function minima(k = 0, arr = []) {
    var arrMinima = [];
    for (var i = 0; i < k; i++) {
        const indexOfSmallestElement = findIndexOfSmallestElement(arr);
        arrMinima.push(arr[indexOfSmallestElement]);
        arr.splice(indexOfSmallestElement, 1);
    }
    return arrMinima;
}

function findIndexOfSmallestElement(a) {
    var smallest = 0;
    if (a.length === 1)
        return 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[smallest])
            smallest = i;
    }
    return smallest;
}

module.exports = minima;
