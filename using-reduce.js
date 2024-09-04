const adder = (arr, initial) => {
    if (initial !== null) {
        return arr.reduce(
            (acc, curr) => acc + curr, initial,
        );

    } else if (initial === null) {
        return arr.reduce(
            (acc, curr) => acc + curr, 0,
        )
    }
}

const sumOrMul = (arr, initial) => {
    if (initial !== null) {
        return arr.reduce(
            (acc, curr) => {
                if (curr % 2 == 0) {
                    return acc *= curr
                } else {
                    return acc += curr
                }
            }, initial
        )
    } else if (initial === null) {
        return arr.reduce(
            (acc, curr) => {
                if (curr % 2 == 0) {
                    return acc *= curr
                } else {
                    return acc += curr
                }
            }, 0
        )
    }
}
const funcExec = (arr) => {
    return arr.reduce((acc, func) => func(acc), undefined);
}
//console.log(sumOrMul([1, 2, 3, 5, 8], 5))
