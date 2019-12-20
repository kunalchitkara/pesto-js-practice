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
