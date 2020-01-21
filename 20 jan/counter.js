function counter() {
    var counter = 0;
    return function () {
        return ++counter;
    }
}
module.exports = counter;