const fold = (arr,func,acc) => {
    let result = acc;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            result = (func( result,arr[i]));
        }
    }
    return result;
}

const foldRight = (arr,func,acc) => {
    let result = acc;
    if (Array.isArray(arr)) {
        for (let i = arr.length-1; i >= 0; i--) {
            result = (func( result,arr[i]));
        }
    }
    return result;
}

const reduce = (arr, func) => {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = func(result, arr[i]);
    }
    return result;
};

const reduceRight = (arr, func) => {
    if (arr.length < 1) {
        throw new Error('Array must have at least one element');
    }
    let result = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        result = func(result, arr[i]);
    }
    return result;
};



// const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2))
// console.log(foldRight([1, 2, 3], adder, 2))
// console.log(reduce([1, 2, 3], adder))