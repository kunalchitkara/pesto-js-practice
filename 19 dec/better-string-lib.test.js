const { reverse, equal } = require('./better-string-lib');

describe('testing reverse method', () => {
    it('should return reverse in case of ascii string', () => {
        expect(reverse('ab')).toBe('ba');
    });
    it('should return blank in case of blank string', () => {
        expect(reverse('')).toBe('');
    });
    it('should return reverse in case of non-ascii string', () => {
        expect(reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
    });
    it('should return reverse in case of another non-ascii string', () => {
        expect(reverse('mañana mañana')).toBe('anañam anañam');
    });
});

describe('testing equal method', () => {
    it('should return true if both inputs are blank', () => {
        expect(equal('', '')).toBe(true);
    });

    it('should return true if both ascii inputs are equal', () => {
        expect(equal('ab', 'ab')).toBe(true);
    });

    it('should return true if both non-ascii inputs are equal', () => {
        expect(equal('mañana', 'mañana')).toBe(true);
    });

    it('should return false if one is ascii input and other is not', () => {
        expect(equal('mañana', 'manana')).toBe(false);
    });

    it('should return false if both ascii inputs are unequal', () => {
        expect(equal('mananan', 'mananam')).toBe(false);
    });
});
