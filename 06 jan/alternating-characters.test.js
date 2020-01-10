const alternatingCharacters = require('./alternating-characters');

describe('test scenarios of alternating characters needed', () => {
    it('test positive', () => {
        expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);
    });

    it('test positive', () => {
        expect(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
    });
})
