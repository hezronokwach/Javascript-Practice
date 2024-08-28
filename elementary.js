const multiply = (a, b) => {
    let result = 0;
    let absA = Math.abs(a)
    let absB = Math.abs(b)
    let isNegative = false;
    if (a < 0 && b >= 0) {
        isNegative = true;
    } else if (a >= 0 && b < 0) {
        isNegative = true;
    }
    while (absB > 0) {
        result += absA
        absB--
    }
    if (isNegative) {
        return -result
    } else {
        return result
    }
}

const divide = (a, b) => {
    let result = 0;
    let absA = Math.abs(a)
    let absB = Math.abs(b)
    let isNegative = false;
    if (a < 0 && b >= 0) {
        isNegative = true;
    } else if (a >= 0 && b < 0) {
        isNegative = true;
    }
    while ((absA - absB) >= 0) {
        result++
        absA -= absB
    }
    if (isNegative) {
        return -result
    } else {
        return result
    }
}

const modulo = (a, b) => {
    let result = a;
    let flag = false;
    if (a < 0){
        a = -a;
        flag = true;
    }
    if (b < 0){
        b = -b
    }
    while (result >= b) {
        result -= b;
    }
    if (flag) {
        result = -result
    }

    return result;
}

// Example usages
console.log(divide(7, 3)); 

