const aperture = require('./aperture');

describe('test scenarios of aperture', () => {
    it('test positive', () => {
        expect(aperture(2, [1, 2, 3, 4, 5])).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
        expect(aperture(3, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
    });

    it('test bigger input', () => {
        expect(aperture(7, [1, 2, 3, 4, 5])).toEqual([]);
    });
})
