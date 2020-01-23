function cacheFunction(fn) {
    const cache = {};
    return function () {
        var key = `${fn.name}(${Object.values(arguments).join(',')})`;
        if (!Object.keys(cache).includes(key)) {
            cache[key] = fn(...arguments);
        }
        return cache[key];
    }
}

module.exports = cacheFunction;