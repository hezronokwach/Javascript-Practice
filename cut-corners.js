// const multiply = (a, b) => {
//     let result = 0;
//     let absA = Math.abs(a)
//     let absB = Math.abs(b)
//     let isNegative = false;
//     if (a < 0 && b >= 0) {
//         isNegative = true;
//     } else if (a >= 0 && b < 0) {
//         isNegative = true;
//     }
//     while (absB > 0) {
//         result += absA
//         absB--
//     }
//     if (isNegative) {
//         return -result
//     } else {
//         return result
//     }
// }

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    let result = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    let isNegative = (a < 0) ^ (b < 0);

    while (absA >= absB) {
        result++;
        absA -= absB;
    }
    return isNegative ? -result : result;
}


const modulo = (a, b) => {
    if (b !== 0) {
        let flag = false;
        if (a < 0) {
            a = -a;
            flag = true;
        }
        if (b < 0) {
            b = -b
        }
        let result = a;
        while (result >= b) {
            result -= b;
        }
        if (flag) {
            result = -result
        }
        return result;
    }

}

const round = (value) => {
    if (value === 0) {
        return 0
    } else if (value === -Infinity) {
        return -Infinity
    } else if (value === Infinity) {
        return Infinity
    }
    let product = value * 10;
    let mod = modulo(product, 10);
    if (mod >= 5) {
        return divide(product, 10) + 1;
    } else if (mod <= -5) {
        return divide(product, 10) - 1;
    } else {
        return divide(product, 10);
    }
}

const floor = (value) => {
    if (value === 0) {
        return 0
    } else if (value === -0) {
        return -0
    } else if (value === -Infinity) {
        return -Infinity
    } else if (value === Infinity) {
        return Infinity
    }
    let product = value * 10;
    if (value < 0) {
        return divide(product, 10) - 1;
    } else {
        return divide(product, 10);
    }
}

const trunc = (value) => {
    if (value === 0) {
        return 0
    } else if (value === -0) {
        return -0
    } else if (value === -Infinity) {
        return -Infinity
    } else if (value === Infinity) {
        return Infinity
    }
    let product = value * 10;
    return divide(product, 10);
}

const ceil = (value) => {
    if (value === 0) {
        return 0
    } else if (value === -0) {
        return -0
    } else if (value === -Infinity) {
        return -Infinity
    } else if (value === Infinity) {
        return Infinity
    }
    let product = value * 10;
    if (value < 0) {
        return divide(product, 10);
    } else {
        return divide(product, 10) + 1;
    }
}

console.log(Math.abs(47 / 10))


// const nums = [3.7, -3.7, 3.1, 0]
// console.log(nums.map(round))
//  //console.log(nums.map(floor))
// // console.log(nums.map(trunc))
// //console.log(nums.map(ceil))








