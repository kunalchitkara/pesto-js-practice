const argsString = require('./args-strings');

describe('Arguments String', () => {
    it('equal number of placeholders and array arguments', () => {
        expect(argsString('{} {}', ['Hello', 'World!'])).toBe('Hello World!');
    });

    it('equal number of placeholders and array arguments', () => {
        expect(argsString('How are you?', ['Hey', 'what'])).toBe('How are you?');
    });

    it('should throw if too few array arguments', () => {
        expect(() => argsString('{} {} {}', ['Hello', 'World!'])).toThrow();
    });
});