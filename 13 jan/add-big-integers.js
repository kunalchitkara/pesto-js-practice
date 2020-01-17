const bigIntUtil = {
    addNumbers(numbers, carry = 0, sum = '') {
        var _sum = 0;
        // filter out all blank inputs
        numbers = numbers.map(n => n.trim()).filter(n => n !== '');
        if (numbers.length === 0)
            return (carry == 0 ? "" : carry.toString()) + sum;
        for (var i = 0; i < numbers.length; i++) {
            _sum += parseInt(numbers[i].split('').pop());
            numbers[i] = numbers[i].substr(0, numbers[i].length - 1);
        }
        _sum = _sum + parseInt(carry);
        return this.addNumbers(numbers, parseInt(_sum === 0 ? 0 : _sum / 10).toString(), (_sum % 10).toString() + sum);
    }
}

function addBigIntegers(str = '') {
    var input = str.split('\n');
    var length = parseInt(input.shift());
    var numbers = input;
    if (length !== numbers.length)
        throw new Error(`Invalid Input: epxecting ${length} numbers after first line.`)
    return bigIntUtil.addNumbers(numbers);
}

module.exports = addBigIntegers;