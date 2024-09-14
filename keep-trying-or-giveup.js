function retry(count, callback) {
    return async function (...args) {
        for (let i = 0; i <= count; i++) {
            try {
                return await callback(...args);
            } catch (error) {
                if (i === count) {
                    throw error;
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