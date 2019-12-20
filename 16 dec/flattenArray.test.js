const flattenArray = require('./flattenArray');

test('Positive Scenarios', () => {
    expect(JSON.stringify(flattenArray([1, [2, 3]]))).toBe(JSON.stringify([1, 2, 3]));
    expect(JSON.stringify(flattenArray([[1, 1], 2, [1, 1]]))).toBe(JSON.stringify([1, 1, 2, 1, 1]));
    expect(JSON.stringify(flattenArray([1, [4, [6]]]))).toBe(JSON.stringify([1, 4, 6]));
})

test('Negative Scenarios', () => {
    try {
        console.log(flattenArray(1));
    }
    catch (err) {
        expect(err.message).toBe('Invalid Input: input should be an array');
    }
})

