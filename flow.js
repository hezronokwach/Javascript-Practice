const flow = (...funcs) => (arg) => {
    return funcs.reduce((result, func) => func(result), arg);
};