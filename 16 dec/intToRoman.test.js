const intToRoman = require('./intToRoman');

test('Positive Scenarios', () => {
    expect(intToRoman(5)).toBe('V');
    expect(intToRoman(53)).toBe('LIII');
    expect(intToRoman(12)).toBe('XII');
    expect(intToRoman(19)).toBe('XIX');
    expect(intToRoman(49)).toBe('XLIX');
})

test('Negative Scenarios', () => {
    try {
        console.log(intToRoman(1.2));
    }
    catch (err) {
        expect(err.message).toBe('Invalid Input: Roman numbers exist only integers');
    }
    try {
        console.log(intToRoman(-1));
    }
    catch (err) {
        expect(err.message).toBe('Invalid Input: Roman numbers exist only for positive integers');
    }
})
