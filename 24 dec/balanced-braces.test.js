const balancedBraces = require('./balanced-braces');

describe('testing balanced braces scenarios', () => {
    it('should return true in case of a basic positive scenario', () => {
        expect(balancedBraces("{}")).toBe(true);
    });

    it('should return true in case of a big positive scenario', () => {
        expect(balancedBraces("{()[{}[]]}")).toBe(true);
    });

    it('should return false in case of a negative scenario', () => {
        expect(balancedBraces("{(})")).toBe(false);
    });

    it('should return false in case of a complex negative scenario', () => {
        expect(balancedBraces("{()[}[]]}")).toBe(false);
    });

    it('should return true in case of a big complex positive scenario', () => {
        expect(balancedBraces("{if(a==b) {x = y;}}")).toBe(true);
    });

    it('should return true in case of a big complex positive scenario', () => {
        expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
    });

    it('should return false in case of a complex negative scenario', () => {
        expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
    });
});