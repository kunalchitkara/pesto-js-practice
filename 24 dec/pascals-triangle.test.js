const Triangle = require('./pascals-triangle');

describe('testing pascals triangle scenarios', () => {
    it('should give n rows in case of n as an input', () => {
        expect(new Triangle(3).rows.length).toBe(3);
        expect(new Triangle(5).rows.length).toBe(5);
        expect(new Triangle(7).rows.length).toBe(7);
        expect(new Triangle(20).rows.length).toBe(20);
    });

    it('should give 20th row of the 20 row triangle as expected', () => {
        const twentieth = [
            1,
            19,
            171,
            969,
            3876,
            11628,
            27132,
            50388,
            75582,
            92378,
            92378,
            75582,
            50388,
            27132,
            11628,
            3876,
            969,
            171,
            19,
            1];
        expect(new Triangle(20).rows[19]).toEqual(twentieth);
    })
})
