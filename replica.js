function replica(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (source[key] instanceof RegExp) {
                    target[key] = new RegExp(source[key]);
                } else if (source[key] !== null && typeof source[key] === 'object') {
                    if (typeof target[key] !== 'object' || target[key] === null) {
                        target[key] = Array.isArray(source[key]) ? [] : {};
                    }
                    target[key] = replica(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
}