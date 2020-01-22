# [Linked List Node](https://www.notion.so/Linked-List-Node-c90a7195978840888f098d7a66a73e5c)
Create a LinkedListNode class based on the following test cases

    describe('LinkedListNode', () => {
      it('should create list node with value', () => {
        const node = new LinkedListNode(1);
    
        expect(node.value).toBe(1);
        expect(node.next).toBeNull();
      });
    
      it('should create list node with object as a value', () => {
        const nodeValue = { value: 1, key: 'test' };
        const node = new LinkedListNode(nodeValue);
    
        expect(node.value.value).toBe(1);
        expect(node.value.key).toBe('test');
        expect(node.next).toBeNull();
      });
    
      it('should link nodes together', () => {
        const node2 = new LinkedListNode(2);
        const node1 = new LinkedListNode(1, node2);
    
        expect(node1.next).toBeDefined();
        expect(node2.next).toBeNull();
        expect(node1.value).toBe(1);
        expect(node1.next.value).toBe(2);
      });
    
      it('should convert node to string', () => {
        const node = new LinkedListNode(1);
    
        expect(node.toString()).toBe('1');
    
        node.value = 'string value';
        expect(node.toString()).toBe('string value');
      });
    
      it('should convert node to string with custom stringifier', () => {
        const nodeValue = { value: 1, key: 'test' };
        const node = new LinkedListNode(nodeValue);
        const toStringCallback = value => `value: ${value.value}, key: ${value.key}`;
    
        expect(node.toString(toStringCallback)).toBe('value: 1, key: test');
      });
    });

# [Bind](https://www.notion.so/Bind-a1be263eb45d42a2b9bce7f4332cc5b0)
Write a method `bind` based on the below test cases

    describe('bind', () => {
      function addFourNumbers(a, b, c, d) {
        return a + b + c + d;
      }
    
      function firstNameFavoriteColor(favoriteColor) {
        return `${this.firstName}'s favorite color is ${favoriteColor}`;
      }
    
      const person = {
        firstName: 'Goku',
      };
    
      test('returns a function', () => {
        expect(typeof bind(firstNameFavoriteColor, person)).toBe('function');
      });
    
      test('is invoked with the value of the keyword this passed to the function', () => {
        let bindFn = bind(firstNameFavoriteColor, person);
        expect(bindFn('green')).toBe('Goku\'s favorite color is green');
        bindFn = bind(firstNameFavoriteColor, person, 'blue');
        expect(bindFn('green')).toBe('Goku\'s favorite color is blue');
      });
    
      test('is invoked with the remaining arguments from the outer function and inner function', () => {
        expect(bind(addFourNumbers, this, 1)(2, 3, 4)).toBe(10);
        expect(bind(addFourNumbers, this, 1, 2)(3, 4)).toBe(10);
        expect(bind(addFourNumbers, this, 1, 2, 3)(4)).toBe(10);
        expect(bind(addFourNumbers, this, 1, 2, 3, 4)()).toBe(10);
        expect(bind(addFourNumbers, this)(1, 2, 3, 4)).toBe(10);
        expect(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(10);
      });
    });