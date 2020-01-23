# [Cache Function](https://www.notion.so/Cache-Function-8d8e24fb9a6343858eb3d58912e0ef8f)

Should return a function that invokes `cb`. A cache should be kept in closure scope.

The cache should keep track of all arguments have been used to invoke this function.

If the returned function is invoked with arguments that it has already seen then it should return the cached result and not invoke `cb` again. `cb` should only ever be invoked once for a given set of arguments.

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

# [User Check Password](https://www.notion.so/User-Check-Password-0e00dc22761d4e3d9a99cbc527c7d781)
### Instructions

    function User(username, password) {
      // set a username and password property on the user object that is created
    }
    
    // create a method on User called `checkPassword`
    // this method should take in a string and compare it to the object's password property
    // return `true` if they match, otherwise return `false`
    
    User.prototype.checkPassword = function checkPassword(password) {
    
    };

### Test cases

    describe('User', () => {
      test('should return an object with the passed username and password when called with new', () => {
        const me = new User('Pesto', 'iamabeast');
        expect(me).toEqual({
          username: 'Pesto',
          password: 'iamabeast',
        });
      });
    
      test('should have a method that checks password and returns correct boolean result', () => {
        const me = new User('Pesto', 'iamabeast');
        const result1 = me.checkPassword('iamabeast');
        const result2 = me.checkPassword('iamnotabeast');
        expect(result1).toBe(true);
        expect(result2).toBe(false);
      });
    });