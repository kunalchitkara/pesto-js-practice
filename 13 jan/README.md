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

# [Animal Sort](https://www.notion.so/Animal-Sort-75d23b9412e2497da1364669890e2224)
Design a custom sort for sorting animals based on the number of legs.

If the animals have same number of legs, sort on the basis of name.

    describe('animalSort', () => {
      it('should return empty array if empty array is passed in', () => {
        expect(animalSort([])).toEqual([]);
      });
    
      it('should return a sorted array of animal objects by their number of legs', () => {
        const arr = [
          { name: 'Dog', numberOfLegs: 4 },
          { name: 'Bird', numberOfLegs: 2 },
          { name: 'Snake', numberOfLegs: 0 },
        ];
        const result = [
          { name: 'Snake', numberOfLegs: 0 },
          { name: 'Bird', numberOfLegs: 2 },
          { name: 'Dog', numberOfLegs: 4 },
        ];
        expect(animalSort(arr)).toEqual(result);
      });
    
      it('should also return sorted names of animals with same number of legs', () => {
        const arr = [
          { name: 'Cat', numberOfLegs: 4 },
          { name: 'Snake', numberOfLegs: 0 },
          { name: 'Dog', numberOfLegs: 4 },
          { name: 'Pig', numberOfLegs: 4 },
          { name: 'Human', numberOfLegs: 2 },
          { name: 'Bird', numberOfLegs: 2 },
        ];
        const result = [
          { name: 'Snake', numberOfLegs: 0 },
          { name: 'Bird', numberOfLegs: 2 },
          { name: 'Human', numberOfLegs: 2 },
          { name: 'Cat', numberOfLegs: 4 },
          { name: 'Dog', numberOfLegs: 4 },
          { name: 'Pig', numberOfLegs: 4 },
        ];
        expect(animalSort(arr)).toEqual(result);
      });
    });

# [Add Big Integers](https://www.notion.so/Add-Big-Integers-ca72b6906fef4b81ac3aabd00183d05f)
The first number in the string represents number of numbers that you have to add.

Restrictions

- Don't use `BigInt` implementation of JavaScript.

For example -

    `3 // -> Add 3 numbers (i.e 539, 8 and 201)
    539
    8
    201`

    describe('addBigIntegers', () => {
      it('Adds a series of large integers', () => {
        expect(addBigIntegers(`3
    539
    8
    201`)).toEqual('748');
        expect(addBigIntegers(`4
    8284089949645109317773
    5840714128396983596239
    12946447842028638908267
    79798868618779259038022`)).toEqual('106870120538849990860301');
        expect(addBigIntegers(`12
    8756499060735809031881837100717640
    70934460872207922801951375249700
    8977770975897338226131985886684681
    91454061215320969515432196409002
    651196844487299640943680194655725
    6961749288159882186283784162262
    9036094416288347680296039655938060
    939687434873009984637644098803640
    79366258890858900774075693801787
    14118147069715140307096132393279
    934555969025599810767196778088364
    7551918592800103991210533406382642`)).toEqual('37110557971443771181453756303286782');
        expect(addBigIntegers(`2
    437720396187259475835238781865656019744046796313512520697126
    984916770573810944707747942410200944569369114644474457801304`)).toEqual('1422637166761070420542986724275856964313415910957986978498430');
      });
    });

# [Center Text](https://www.notion.so/Center-Text-a4b469d44f9c4985875494891ba53811)
Given a string 's' and a length 'n', split 's' into strings which have exactly 'n' characters. Center the strings and fill with spaces. If the string cannot be completely centered, the left side is preferred. Return array of proceeded strings.

    describe('centerText', () => {
      const input = [
        { s: 'the quick brown fox jumped over the lazy dog', n: 11 },
        { s: 'Jaded zombies acted quaintly but kept driving their oxen forward', n: 15 },
        { s: 'A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent', n: 20 },
      ];
    
      const output = [
        [
          ' the quick ',
          ' brown fox ',
          'jumped over',
          ' the lazy  ',
          '    dog    ',
        ],
        [
          ' Jaded zombies ',
          'acted quaintly ',
          '   but kept    ',
          ' driving their ',
          ' oxen forward  ',
        ],
        [
          ' A mad boxer shot a ',
          'quick, gloved jab to',
          'the jaw of his dizzy',
          '      opponent      ',
        ],
      ];
    
      for (let i in input) {
        it('Return proper texts', () => {
          expect(centerText(input[i].s, input[i].n)).toEqual(output[i])
        })
      }
    });

# [Priority Queue](https://www.notion.so/Priority-Queue-894ab6c14b9f469db798d508c662a07a)
- Should insert items to the queue and respect priorities
- Should poll from queue with respect to priorities
- Should be possible to change priority of internal nodes
- Should be possible to change priority of head node
- Should be possible to change priority along with node addition
- Should be possible to search in priority queue by value

    describe('PriorityQueue', () => {
      it('should create default priority queue', () => {
        const priorityQueue = new PriorityQueue();
    
        expect(priorityQueue).toBeDefined();
      });
    
      it('should insert items to the queue and respect priorities', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        expect(priorityQueue.peek()).toBe(10);
    
        priorityQueue.add(5, 2);
        expect(priorityQueue.peek()).toBe(10);
    
        priorityQueue.add(100, 0);
        expect(priorityQueue.peek()).toBe(100);
      });
    
      it('should poll from queue with respect to priorities', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
    
        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(10);
        expect(priorityQueue.poll()).toBe(5);
      });
    
      it('should be possible to change priority of internal nodes', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
    
        priorityQueue.changePriority(100, 10);
        priorityQueue.changePriority(10, 20);
    
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(10);
      });
    
      it('should be possible to change priority of head node', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
    
        priorityQueue.changePriority(200, 10);
        priorityQueue.changePriority(10, 20);
    
        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(10);
      });
    
      it('should be possible to change priority along with node addition', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
    
        priorityQueue.changePriority(200, 10);
        priorityQueue.changePriority(10, 20);
    
        priorityQueue.add(15, 15);
    
        expect(priorityQueue.poll()).toBe(100);
        expect(priorityQueue.poll()).toBe(5);
        expect(priorityQueue.poll()).toBe(200);
        expect(priorityQueue.poll()).toBe(15);
        expect(priorityQueue.poll()).toBe(10);
      });
    
      it('should be possible to search in priority queue by value', () => {
        const priorityQueue = new PriorityQueue();
    
        priorityQueue.add(10, 1);
        priorityQueue.add(5, 2);
        priorityQueue.add(100, 0);
        priorityQueue.add(200, 0);
        priorityQueue.add(15, 15);
    
        expect(priorityQueue.hasValue(70)).toBeFalsy();
        expect(priorityQueue.hasValue(15)).toBeTruthy();
      });
    });