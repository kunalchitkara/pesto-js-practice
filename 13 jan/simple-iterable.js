function simpleIterable() {
  var x = 1, arr = [];
  while (x <= 5) {
    arr.push(x);
    x++;
  }
  return arr;
}
console.log(simpleIterable.constructor.name);
module.exports = simpleIterable;

const iterable = simpleIterable();
const iterator = iterable[Symbol.iterator]();
let value = iterator.next(); // 1
console.log(value)
value = iterator.next(); // 2
console.log(value)
value = iterator.next(); // 3
console.log(value)
value = iterator.next(); // 4
console.log(value)
value = iterator.next(); // 5
console.log(value)
value = iterator.next(); // 5
console.log(value)
