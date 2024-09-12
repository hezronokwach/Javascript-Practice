const throttle = (func, wait) => {
    let lastCall = 0;
    return function(...args) {
        const current = Date.now();
        if (current - lastCall >= wait) {
            const result = func.apply(this, args);
            lastCall = current;
            return result;
        }
    };
};

const opThrottle = (func, wait, options = {}) => {
    let lastCall = 0;
    let lastArgs = null;
    let timer = null;

    return function(...args) {
        const current = Date.now();

        if (options.leading && lastCall === 0) {
            func.apply(this, args);
            lastCall = current;
        } else if (current - lastCall >= wait) {
            func.apply(this, args);
            lastCall = current;
        } else if (options.trailing) {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(() => {
                    if (lastArgs) {
                        func.apply(this, lastArgs);
                        lastCall = Date.now();
                        lastArgs = null;
                        timer = null;
                    }
                }, wait - (current - lastCall));
            }
        }
    };
};