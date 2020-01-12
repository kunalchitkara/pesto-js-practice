var fibonacciIter = {
    *[Symbol.iterator]() {
        var first = 1, second = 2;
        yield first;
        yield second;
        while (1) {
            yield first + second;
            second = first + second;
            first = second - first;
        }
    }
};

module.exports = fibonacciIter;