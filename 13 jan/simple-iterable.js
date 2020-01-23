function simpleIterable() {
  var x = 1, arr = [];
  while (x <= 5) {
    arr.push(x);
    x++;
  }
  return arr;
}

module.exports = simpleIterable;