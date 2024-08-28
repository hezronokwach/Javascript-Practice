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
    while ((absA - absB) > 0) {
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
    let result = 0;
    while ((a - b) >= 0) {
        result = a - b
        a -= b
    }
    return result
}
console.log(multiply(-1, -2))
