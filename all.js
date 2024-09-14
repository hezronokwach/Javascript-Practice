async function all(inputObj = {}) {
    const resultObj = {};
    if (Object.keys(inputObj).length === 0) return {};
    for (let property in inputObj) {
        resultObj[property] = await inputObj[property];
    }
    return resultObj;
}