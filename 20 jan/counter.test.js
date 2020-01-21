const counter = require('./counter');

describe('test counter', () => {
    it('test initialization', () => {
        const newCounter = counter();
        expect(newCounter()).toBe(1);
    })
    it('test single counter', () => {
        const newCounter = counter();
        expect(newCounter()).toBe(1);
        expect(newCounter()).toBe(2);
        expect(newCounter()).toBe(3);
        expect(newCounter()).toBe(4);
    })
    it('test long counter', () => {
        const newCounter = counter();
        let value;
        for (var i = 0; i < 1000; i++)
            value = newCounter();
        expect(value).toBe(1000);
    })
    it('test multiple occurrences', () => {
        const slowCounter = counter();
        const fastCounter = counter();
        let slow;
        let fast;
        for (var i = 0; i < 1000; i++) {
            slow = slowCounter();
            fast = fastCounter();
            fast = fastCounter();
        }
        expect(slow).toBe(1000);
        expect(fast).toBe(2000);
    })
})
