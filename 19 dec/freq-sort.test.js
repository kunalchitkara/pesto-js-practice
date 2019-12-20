const frequencySort = require('./freq-sort');

describe('testing frequency sort', () => {
    it('should work in case of number array', () => {
        expect(frequencySort([2, 3, 6, 2, 2, 4, 3, 2, 4, 2, 5, 5, 3, 2, 1, 2, 3, 3, 4, 5, 5])).toEqual([2, 3, 5, 4, 6, 1]);
    });

    it('should work in case of string array', () => {
        expect(frequencySort(['a', 'z', 'z', 'z', 'b', 'b', 'z'])).toEqual(['z', 'b', 'a']);
    });

    it('should throw exception in case of non-array input', () => {
        expect(() => frequencySort('a')).toThrow();
    });
});