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
   
    let flag = false;
    if (a < 0){
        a = -a;
        flag = true;
    }
    if (b < 0){
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

const round = (value) => {
    let product = multiply(value, 10); 
    let mod = modulo(product, 10); 
    if (mod >= 5 ){
        return divide(product, 10) + 1; 
    } else if(mod <= -5){
        return divide(product, 10) - 1; 
    } else {
        return divide(product, 10); 
    }
}






