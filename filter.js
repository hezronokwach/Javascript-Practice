const filter = (arr, func) => {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

const reject = (arr, func) => {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr) === false) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

const partition = (arr, func) => {
    const passed = [];
    const failed = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                passed.push(arr[i]);

            } else {
                failed.push(arr[i]);
            }
        }
    }
    return [passed, failed];
}
