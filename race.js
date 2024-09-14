async function race(promises = []) {
    if (promises.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        return;
    }
    return Promise.race(promises);
}

async function some(promises, count) {
    if (promises.length === 0 || count === 0) {
        return [];
    }

    return new Promise((resolve) => {
        const results = [];
        let fulfilled = 0;

        promises.forEach((promise) => {
            Promise.resolve(promise).then((value) => {
                results.push(value);
                fulfilled++;
                if (fulfilled === count) {
                    resolve(results);
                }
            }).catch(() => {});
        });
    });
}