const bigIntUtil = {
    addNumbers(numbers, carry = 0, sum = '') {
        let _sum = 0;
        // filter out all blank inputs
        numbers = numbers.map(n => n.trim()).filter(n => n !== '');
        if (numbers.length === 0)
            return (carry == 0 ? "" : carry.toString()) + sum;
        for (let i = 0; i < numbers.length; i++) {
            _sum += parseInt(numbers[i].split('').pop());
            numbers[i] = numbers[i].substr(0, numbers[i].length - 1);
        }
        _sum = _sum + parseInt(carry);
        carry = parseInt(_sum / 10);
        sum = (_sum % 10).toString() + sum;
        return this.addNumbers(numbers, carry, sum);
    }
}

function addBigIntegers(str = '') {
    var input = str.split('\n');
    var length = parseInt(input.shift());
    var numbers = input;
    if (length !== numbers.length)
        throw new Error(`Invalid Input: expecting ${length} numbers after first line.`)
    return bigIntUtil.addNumbers(numbers);
}

module.exports = addBigIntegers;
