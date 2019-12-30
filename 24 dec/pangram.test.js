const isPangram = require('./pangram');

describe('test scenarios of pangram check', () => {
    it('test positive', () => {
        expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
    })

    it('test nagative', () => {
        expect(isPangram('a quick of the enemy will jeopardize gunboats')).toBe(false);
    })
})
