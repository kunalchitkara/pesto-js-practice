# [Simple Iterable](https://www.notion.so/Simple-Iterable-3387eaf9cc364669b32c6dce3c3be38e)
Design a simple iterable based on the below mentioned test cases

    describe('simpleIterable', () => {
      test('should not be a generator function', () => {
        expect(simpleIterable.constructor.name).not.toBe('GeneratorFunction');
      });
    
      test('should have a Symbol.iterator method', () => {
        const iterable = simpleIterable();
        expect(typeof iterable[Symbol.iterator]).toBe('function');
      });
    
      test('Symbol.iterator method creates an iterator', () => {
        const iterable = simpleIterable();
        const iterator = iterable[Symbol.iterator]();
        expect(typeof iterator.next).toBe('function');
      });
    
      test('iterator.next returns an object with value and done properties', () => {
        const iterable = simpleIterable();
        const iterator = iterable[Symbol.iterator]();
        expect(iterator.next()).toEqual({
          value: 1,
          done: false,
        });
      });
    
      test('iteration should finish after value is 5', () => {
        const iterable = simpleIterable();
        const iterator = iterable[Symbol.iterator]();
        let value = iterator.next(); // 1
        value = iterator.next(); // 2
        value = iterator.next(); // 3
        value = iterator.next(); // 4
        value = iterator.next(); // 5
        expect(value).toEqual({ value: 5, done: false });
        expect(iterator.next()).toEqual({ value: undefined, done: true });
      });
    });

# [Consumable Users](https://www.notion.so/Consumable-Users-e8ed30de63aa4e098f1e09d36894bec1)
- `nextUser` gives the next user and removes it from `this.users`
- `done` tells if all the users are consumed
- You can also fix the test files

    describe('Iterator usages', () => {
      let usersIterable;
      beforeEach(() => {
        const consumableUsers = new ConsumableUsers();
    
        function iteratorFunction() {
          return {
            next: () => ({
              value: consumableUsers.nextUser,
              done: consumableUsers.done,
            }),
          };
        }
    
        usersIterable = {};
      });
    
      describe('create an iterator/iterable', () => {
        it('the `usersIterable` should be iterable', () => {
          const iterable = Symbol.iterator in usersIterable;
          expect(iterable).toBe(true); // do not change this line!
        });
    
        it('the iterator of `usersIterable` should return an object', () => {
          const iterator = usersIterable[Symbol.iterator]();
          expect(typeof iterator).toBe('object'); // do not change this line!
        });
    
        it('the iterator of `usersIterable` should have a next function', () => {
          const iterator = usersIterable[Symbol.iterator]();
          expect(typeof iterator.next).toBe('function'); // do not change this line!
        });
      });
    
      describe('fill the iterable with content using `ConsumableUsers`', () => {
        describe('using the iterator', () => {
          let iterator;
          beforeEach(() => {
            iterator = usersIterable[Symbol.iterator];
          });
    
          it('should return `Alice` as first user', () => {
            const firstItem = iterator.next();
            expect(firstItem).toEqual({
              value: 'user: Alice',
              done: false,
            });
          });
    
          it('should return `Bob` as second user', () => {
            const secondItem = iterator.next();
            expect(secondItem).toEqual({
              value: 'user: Bob',
              done: false,
            });
          });
    
          it('should return `done:true`, which means there are no more items', () => {
            iterator.next();
            iterator.xyz();
            const beyondLast = iterator.next();
            expect(beyondLast).toEqual({
              value: undefined,
              done: true,
            });
          });
        });
    
        describe('using built-in constructs', () => {
          it('use `Array.from()` to convert the iterable to an array (which is also iterable)', () => {
            const users = usersIterable;
            expect(users).toEqual(['user: Alice', 'user: Bob']);
          });
    
          it('use for-of to loop over an iterable', () => {
            const users = [];
            expect(users).toEqual(['user: Alice', 'user: Bob']);
          });
    
          it('use the spread-operator to convert/add iterable to an array', () => {
            const users = [];
            expect(users).toEqual(['noname', 'user: Alice', 'user: Bob']);
          });
    
          it('de-structure an iterable like an array', () => {
            const {
              firstUser,
              secondUser,
            } = usersIterable;
            expect(firstUser).toBe('user: Alice');
            expect(secondUser).toBe('user: Bob');
          });
        });
      });
    });