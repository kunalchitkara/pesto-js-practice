var sumFibs = function (num) {
    if (num < 1) {
        throw new Error('Invalid Input: Input may be a positive integer')
    }
    if (num.toString().includes('.')) {
        throw new Error('Invalid Input: Input may only be an integer')
    }
    if (num === 1)
        return 0;
    var a1 = 1, a2 = 1, sum = 1;
    while (a2 < num) {
        a2 = a1 + a2;
        a1 = a2 - a1;
        if (a1 % 2) {
            sum += a1;
        }
    }
    return sum;
};

module.exports = sumFibs;