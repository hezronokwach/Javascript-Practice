const every = (arr, func) => {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (!func(arr[i], i, arr)) {
                return false;
            }
        }
        return true;
    }
}

const some = (arr, func) => {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                return true;
            }
        }
    }
    return false;
}

const none = (arr, func) => {
    if (Array.isArray(arr)) {
        return !some(arr, func);
    }
}