const flow = (...funcs) => {
    if (!funcs.every(func => typeof func === 'function')) {
        throw new TypeError('All arguments must be functions');
    }
    return (arg) => funcs.reduce((result, func) => func(result), arg);
};