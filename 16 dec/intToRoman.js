// constraints :  int will be positive, in range [1, 4000)
function intToRoman(num) {
    if (num < 1) {
        throw new Error('Invalid Input: Roman numbers exist only for positive integers')
    }
    if (num.toString().includes('.')) {
        throw new Error('Invalid Input: Roman numbers exist only integers')
    }
    if (num >= 4000) {
        throw new Error('Invalid Input: Input out of scope')
    }
    var digit, r = '';
    var join = (digit, tens, fives, ones) => {
        if (digit === 9) { r = r.concat(ones + tens); }
        else if (digit > 5) { r = r.concat(fives + ones.repeat(digit % 5)); }
        else if (digit === 5) { r = r.concat(fives); }
        else if (digit === 4) { r = r.concat(ones + fives); }
        else if (digit > 0) { r = r.concat(ones.repeat(digit)) }
    };

    if (num > 999) {
        join(Math.floor(num / 1000), '', '', 'M');
        num = Math.floor(num % 1000);
    }
    if (num > 99) {
        join(Math.floor(num / 100), 'M', 'D', 'C');
        num = Math.floor(num % 100);
    }
    if (num > 9) {
        join(Math.floor(num / 10), 'C', 'L', 'X');
        num = Math.floor(num % 10);
    }
    join(num, 'X', 'V', 'I');
    return r;
};

module.exports = intToRoman;
