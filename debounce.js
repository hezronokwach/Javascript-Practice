function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function opDebounce(func, delay, options = {}) {
    let timer;
    let isLeadingCall = true;
    return function(...args) {
        if (options.leading && isLeadingCall) {
            func.apply(this, args);
            isLeadingCall = false;
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
                isLeadingCall = true;
            }, delay);
        }
    };
}