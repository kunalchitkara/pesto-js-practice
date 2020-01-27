const setDefaultProperty = function (object, defaultValue) {
    return new Proxy(object, {
        get: (obj, key) => (key in obj) ? obj[key] : defaultValue
    });
}

module.exports = setDefaultProperty;
