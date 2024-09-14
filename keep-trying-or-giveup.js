function retry(count, callback) {
    return function (...args) {
        for (let i = 0; i <= count; i++) {
            try {
                return callback(...args)
            }
            catch (error) {
                if (i === count - 1) {
                    throw new Error('All attempts failed');
                }
            }

        }
    }
}

function timeout(delay, callback) {
    return async function (...args) {
        let timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        );
        return Promise.race([
            callback(...args),
            timeoutPromise
        ]);
    };
}