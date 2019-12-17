# 1 [Memoize](https://www.notion.so/Memoize-faecc963d4f34b1c8acb10ce99590df9)

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

# 2 [Convert to Roman](https://www.notion.so/Convert-to-Roman-5aa3c6818d9b48e6a52ad240aebb581c)

Write a function that converts integers into their equivalent [roman numerals.](http://en.wikipedia.org/wiki/Roman_numerals)

### Example -

    convertIntToRoman(12)
    // XII

# 3 [Flatten](https://www.notion.so/Flatten-825f4d60b7ce4dfdbb907b9f2434b746)

Write a function that takes an array and flattens all the nested arrays.
The default flattening level is 1.

### Example —

    flatten([1, 2, [3, 4, [5, 6]]]);
    // [1, 2, 3, 4, [5, 6]]