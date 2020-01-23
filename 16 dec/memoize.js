var map = {};
const LAST_KEY = "_last_key_";
const keyMaker = (method, ...params) => "method" + method.name + "?" + params.join('&');

this.memoize = function (method, ...params) {
    var key = keyMaker(method, params);
    map[key] = method(...params);
    // Storing in memory...
    map[LAST_KEY] = key;
}

this.memoized = function (method = null, params = []) {
    var key;
    if (!method) {
        // No input method provided, using last memoized method and values
        key = map[LAST_KEY];
    } else {
        key = keyMaker(method, params);
    }
    if (!map[key]) {
        throw new Error('ERROR: Method call not memoized');
    }
    // Using memoized value...
    return map[key];
}
module.export = this.memoize;
module.export = this.memoized;