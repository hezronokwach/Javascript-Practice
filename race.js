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

    const results = await Promise.all(
        promises.map(p => Promise.resolve(p).then(
            value => ({ status: 'fulfilled', value }),
            reason => ({ status: 'rejected', reason })
        ))
    );

    const fulfilled = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value)
        .slice(0, count);

    return fulfilled;
}