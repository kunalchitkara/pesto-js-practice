# 1 [without](https://www.notion.so/without-5b2f7ebdb6d74522be97d15df2c8598b)
**Returns a new list without values of the first argument.**

### Restrictions

- Don't use `for-loops`.

    without([1, 2], [1, 2, 1, 4, 5]);
    // [4, 5]
    without([0], [-0]).length
    // 1
    without([1, 2], [1, 2, 1, 3, 4]); 
    //=> [3, 4]

# 2 [array-addition](https://www.notion.so/array-addition-21e697c843964e4b8b1884297e60f4c0)
**Please read the test cases and appropriately handle all the conditions.**

Your code should pass on at least these tests. You may add more.

*Filename — **arrayAddition.test.js***

    describe('arrayAddition', () => {
      it('should return addition of 2 arrays as a separate array', () => {
        expect(arrayAddition([-1, -2, -3, -4], [1, 2, 3, 4])).toEqual([0, 0, 0, 0]);
      });
    
      it('should return addition of 2 arrays as a separate array', () => {
        expect(arrayAddition([0, 0, 0, 0], [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
      });
    
      it('should return addition of 2 arrays as a separate array of the length of the bigger array', () => {
        expect(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999])).toEqual([100, -199, 200, 404, 0, 99999]);
      });
    
      it('should throw if one of the array is empty', () => {
        expect(() => arrayAddition([], [100, -200, 200, 400, 0, 99999])).toThrow();
      });
    
      it('should throw if parameters are not arrays', () => {
        expect(() => arrayAddition('a', [100, -200, 200, 400, 0, 99999])).toThrow();
      });
    
      it('should throw if parameters are not arrays', () => {
        expect(() => arrayAddition('a', 1)).toThrow();
      });
    
      it('should throw error on non strictly numerical arrays', () => {
        expect(() => arrayAddition(['1', '2', '3', '4'], [2, 'b', 'c'])).toThrow();
      });
    });