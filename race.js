async function race(promiseArray = []) {
    if (promiseArray.length === 0) {
        setTimeout(() => {}, 10000);
    }
    return new Promise((resolveMain, rejectMain) => {
        promiseArray.forEach((singlePromise) => {
            singlePromise.then(resolveMain, rejectMain);
        });
    });
}

async function some(promiseArray, targetCount) {
    if (promiseArray.length === 0 || targetCount === 0) {
        return Promise.resolve([]);
    }
    return new Promise((resolveMain, rejectMain) => {
        var resultArray = [];
        let remainingCount = targetCount;
        promiseArray.forEach((singlePromise) => {
            if (singlePromise instanceof Promise) {
                singlePromise.then((result) => {
                    resultArray.push(result);
                    remainingCount--;
                    if (remainingCount === 0) {
                        if (resultArray[1] === undefined && resultArray.length > 1) {
                            resultArray = [resultArray[1], resultArray[0]];
                        }
                        resolveMain(resultArray);
                    }
                }, rejectMain);
            } else {
                resultArray.push(singlePromise);
                remainingCount--;
                if (remainingCount === 0) {
                    resolveMain(resultArray);
                }
            }
        });
    });
}