const isomorphic = require('./isomorphic');

describe('testing isomorphic scenarios', () => {
    it('should return true in case of a positive scenario', () => {
        expect(isomorphic(['egg', 'add'])).toBe(true);
    });

    it('should return false in case of a negative scenario', () => {
        expect(isomorphic(['foo', 'bar'])).toBe(false);
    });

    it('should return true in case of a positive complex scenario', () => {
        expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
    });

    it('should return false in case of a negative complex scenario', () => {
        expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
    });

    it('should return true in case of a basic posive scenario', () => {
        expect(isomorphic(['better', 'fetter'])).toBe(true);
    })
});