function replica(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (source[key] instanceof RegExp) {
                    target[key] = new RegExp(source[key]);
                } else if (source[key] !== null && typeof source[key] === 'object') {
                    target[key] = replica(Array.isArray(source[key]) ? [] : {}, target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
}