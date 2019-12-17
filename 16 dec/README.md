Create a function [***memoize***](https://en.wikipedia.org/wiki/Memoization) that caches another function. 

Example:

    function expensiveOperation() {
      console.log('expensiveOperation function is called!');
      return 22;
    }
    
    const memoized = memoize(expensiveOperation); // <- memoize function
    console.log(memoized());
    console.log(memoized());

The console should show:

    expensiveOperation function is called!
    22
    22