const pick = (obj, key) => {
    const result = {};
    const keys = Array.isArray(key) ? key : [key];
    for (let k of keys) {
        if (k in obj) {
            result[k] = obj[k];
        }
    }
    return result;
}

const omit = (obj, key) => {
    const result = {};
    const keys = Array.isArray(key) ? key : [key];
    for (let k in obj) {
        if (!keys.includes(k)) {
            result[k] = obj[k];
        }
    }
    return result;
}

