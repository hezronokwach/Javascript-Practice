const map = (arr, func) => {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            result.push(func(arr[i], i, arr));
        }
    }
    return result;
}

const flatMap = (arr, func) => {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            const mappedValue = func(arr[i], i, arr);
            if (Array.isArray(mappedValue)) {
                result.push(...mappedValue);
            } else {
                result.push(mappedValue);
            }
        }
    }
    return result;
}