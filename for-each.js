const forEach = (arr, func) => {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            func(arr[i], i, arr);
        }
    }
}