const ConsumableUsers = require('./consumable-users');

describe('Iterator usages', () => {
    let usersIterable;
    beforeEach(() => {
        const consumableUsers = new ConsumableUsers(['Alice', 'Bob']);
        usersIterable = consumableUsers.users;
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
                const consumableUsers = new ConsumableUsers(['Alice', 'Bob']);
                function iteratorFunction() {
                    return {
                        next: () => {
                            var nextUser = consumableUsers.nextUser;
                            var valueToReturn = {
                                done: consumableUsers.done
                            }
                            if (nextUser !== 'noname')
                                valueToReturn.value = nextUser;
                            return valueToReturn;
                        },
                        xyz: () => {
                            while (!consumableUsers.done)
                                consumableUsers.nextUser
                        }
                    }
                }
                iterator = iteratorFunction();
            });

            it('should return `Alice` as first user', () => {
                const firstItem = iterator.next();
                expect(firstItem).toEqual({
                    value: 'user: Alice',
                    done: false,
                });
            });

            it('should return `Bob` as second user', () => {
                var secondItem = iterator.next();
                secondItem = iterator.next();
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
            let consumableUsers;
            beforeEach(() => {
                consumableUsers = new ConsumableUsers(['Alice', 'Bob']);
            })
            it('use `Array.from()` to convert the iterable to an array (which is also iterable)', () => {
                var usersIterable = [];
                var user = consumableUsers.nextUser;
                while (!consumableUsers.done) {
                    usersIterable.push(user);
                    user = consumableUsers.nextUser;
                }
                const users = Array.from(usersIterable);
                expect(users).toEqual(['user: Alice', 'user: Bob']);
            });

            it('use for-of to loop over an iterable', () => {
                var usersIterable = [];
                var user = consumableUsers.nextUser;
                while (!consumableUsers.done) {
                    usersIterable.push(user);
                    user = consumableUsers.nextUser;
                }
                var users = [];
                for (var u of usersIterable)
                    users.push(u);

                expect(users).toEqual(['user: Alice', 'user: Bob']);
            });

            it('use the spread-operator to convert/add iterable to an array', () => {
                var usersIterable = [];
                var user = consumableUsers.nextUser;
                while (!consumableUsers.done) {
                    usersIterable.push(user);
                    user = consumableUsers.nextUser;
                }
                usersIterable.unshift(user);
                var users = [...usersIterable];
                expect(users).toEqual(['noname', 'user: Alice', 'user: Bob']);
            });

            it('de-structure an iterable like an array', () => {
                var usersIterable = [];
                var length = consumableUsers.users.length;
                for (var i = 0; i <= length; i++) {
                    var user = consumableUsers.nextUser;
                    usersIterable.push(user);
                }
                const [
                    firstUser,
                    secondUser,
                ] = usersIterable;
                expect(firstUser).toBe('user: Alice');
                expect(secondUser).toBe('user: Bob');
            });
        });
    });
});
