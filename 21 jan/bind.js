let bindUtil = {
    bind(method, object, ...params) {
        return method.bind(object, ...params);
    }
}

module.exports = bindUtil;