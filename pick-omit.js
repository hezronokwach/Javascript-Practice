const pick = (obj, [...arr]) => {
    const result = {};
    for (let key of arr) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}

const omit = (obj, [...arr]) => {
    const result = {};
    for (let key in obj) {
        if (!arr.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

