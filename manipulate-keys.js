const filterKeys = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func(key)) result[key] = value;
    }
    return result;
};

const mapKeys = (obj, func) => {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        result[func(key)] = value;
    }
    return result;
};

const reduceKeys = (obj, func, initial) => {
    const keys = Object.keys(obj);
    let acc, start;
    if (initial === undefined) {
        acc = keys[0];
        start = 1;
    } else {
        acc = initial;
        start = 0;
    }
    for (let i = start; i < keys.length; i++) {
        acc = func(acc, keys[i]);
    }
    return acc;
};