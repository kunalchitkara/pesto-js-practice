const { memoize, memoized } = require('./memoize');

function expensiveOperation1() {
    console.log(`Calling method Expensive Operation 1 with ${arguments.length === 0 ? "no arguments" : Object.values(arguments).join(' & ')} arguments`)
    return `Expensive Operation 1 Output ${arguments.length > 0 ? "using params " + Object.values(arguments).join(' & ') : "with no params"}`;
}

function expensiveOperation2() {
    console.log(`Calling method Expensive Operation 2 with ${arguments.length === 0 ? "no arguments" : Object.values(arguments).join(' & ')} arguments`)
    return `Expensive Operation 2 Output ${arguments.length > 0 ? "using params " + Object.values(arguments).join(' & ') : "with no params"}`;
}

console.log(expensiveOperation1("MX", "MY"));

test('Positive Scenarios', () => {
    memoize(expensiveOperation1);
    console.log(memoized());
    console.log(memoized(expensiveOperation1));
    console.log(memoized());
    memoize(expensiveOperation1, "test1");
    console.log(memoized(expensiveOperation1, 'test1'));
    console.log(memoized());
    console.log(memoized(expensiveOperation1));
    memoize(expensiveOperation2, "test1");
    console.log(memoized(expensiveOperation2, "test1"));
});

test('Negative Scenarios', () => {
    try {
        console.log(memoized(expensiveOperation1, 'test2'));
    } catch (err) {
        expect(err.message).toBe('ERROR: Method call not memoized');
    }
    try {
        console.log(memoized(expensiveOperation2));
    } catch (err) {
        expect(err.message).toBe('ERROR: Method call not memoized');
    }
    try {
        console.log(memoized(expensiveOperation2, "test2"));
    } catch (err) {
        expect(err.message).toBe('ERROR: Method call not memoized');
    }
});
