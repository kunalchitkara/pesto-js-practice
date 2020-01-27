function copy(obj) {
    const props = Object.getOwnPropertyDescriptors(obj);
    var newObj = new Object();
    Object.defineProperties(newObj, props);
    return newObj;
}

module.exports = copy;
