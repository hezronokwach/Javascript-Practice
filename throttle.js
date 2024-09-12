const throttle = (func, wait) => {
    let lastCall = 0;
    return function (...args) {
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
    let timer = null;

    return function (...args) {
        const current = Date.now();

        if (!lastCall && options.leading === false) {
            lastCall = current;
        }

        if (current - lastCall >= wait) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            func.apply(this, args);
            lastCall = current;
        } else if (!timer && options.trailing !== false) {
            timer = setTimeout(() => {
                func.apply(this, args);
                lastCall = Date.now();
                timer = null;
            }, wait - (current - lastCall));
        }
    };
};