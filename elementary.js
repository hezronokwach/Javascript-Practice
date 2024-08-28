const multiply = (a, b) => {
    let result = 0;
    while (b > 0) {
        result += a
        b--
    }
    return result
}

const divide = (a, b) => {
    let result = 0;
    while ((a - b) > 0) {
        result++
        a -= b
    }
    return result
}

const modulo = (a, b) => {
    let result = 0;
    while ((a - b) >= 0) {
        result = a - b
        a -= b
    }
    return result
}
