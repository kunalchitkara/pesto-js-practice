# [JavaScript Functions [Public]](https://www.notion.so/JavaScript-Functions-Public-814966464ee14793a6907d371a05a51c)

## [Cache Function](https://www.notion.so/Cache-Function-2ed3486b96814bb6b8999a455c960a7b)

Should return a function that invokes `cb`. A cache should be kept in closure scope.

The cache should keep track of all arguments have been used to invoke this function.

If the returned function is invoked with arguments that it has already seen then it should return the cached result and not invoke `cb` again.

`cb` should only ever be invoked once for a given set of arguments.

    describe('cacheFunction', () => {
      it('should return a function', () => {
        expect(typeof cacheFunction()).toBe('function');
      });
      it('The cached function should return the correct result', () => {
        const foo = x => (x * x);
        const cachedFunction = cacheFunction(foo);
        expect(cachedFunction(5)).toBe(25);
      });
      it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
        const foo = jest.fn();
        const myCachedFunction = cacheFunction(foo);
        myCachedFunction(true);
        myCachedFunction(true);
        myCachedFunction(true);
        myCachedFunction(true);
        myCachedFunction(true);
        myCachedFunction(10);
        myCachedFunction(10);
        myCachedFunction(10);
        myCachedFunction(10);
        myCachedFunction(10);
        expect(foo).toHaveBeenCalledTimes(2);
      });
    });