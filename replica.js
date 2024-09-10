const is = {
    arr: (n) => Array.isArray(n),
    obj: (n) => typeof n === 'object' && n !== null && !(n instanceof RegExp) && !Array.isArray(n),
    fun: (n) => typeof n === 'function'
};

function replica(target, ...sources) {
    sources.forEach((source) => {
        Object.keys(source).forEach((key) => {
            if (is.obj(source[key])) {
                if (!is.obj(target[key])) {
                    target[key] = {};
                }
                replica(target[key], source[key]);
            } else if (is.arr(source[key])) {
                target[key] = source[key].map(item => 
                    is.obj(item) || is.arr(item) ? replica({}, item) : item
                );
            } else if (source[key] instanceof RegExp) {
                target[key] = new RegExp(source[key]);
            } else {
                target[key] = source[key];
            }
        });
    });
    return target;
}