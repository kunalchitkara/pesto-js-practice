var map = {};
const LAST_KEY = "_last_key_";
const keyMaker = (method, ...params) => "method" + method.name + "?" + params.join('&');

this.memoize = function (method, ...params) {
    var key = keyMaker(method, params);
    map[key] = method(...params);
    console.log('Storing in memory...');
    map[LAST_KEY] = key;
}

this.memoized = function (method = null, params = []) {
    var key;
    if (!method) {
        console.log('No input method provided, using last memoized method and values')
        key = map[LAST_KEY];
    } else {
        key = keyMaker(method, params);
    }
    if (!map[key]) {
        throw new Error('ERROR: Method call not memoized');
    }
    console.log("Using memoized value...")
    return map[key];
}
module.export = this.memoize;
module.export = this.memoized;