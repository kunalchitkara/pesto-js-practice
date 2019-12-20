const sumFibs = require('./sumOfFibs');

test('Positive Scenarios', () => {
    expect(sumFibs(2)).toBe(2);
    expect(sumFibs(3)).toBe(2);
    expect(sumFibs(4)).toBe(5);
    expect(sumFibs(5)).toBe(5);
    expect(sumFibs(6)).toBe(10);
    expect(sumFibs(10)).toBe(10);
})

test('Negative Scenarios', () => {
    try {
        console.log(sumFibs(-2));
    }
    catch (err) {
        expect(err.message).toBe('Invalid Input: Input may be a positive integer');
    }
    try {
        console.log(sumFibs(6.7));
    }
    catch (err) {
        expect(err.message).toBe('Invalid Input: Input may only be an integer');
    }
})