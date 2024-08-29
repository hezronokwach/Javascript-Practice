function round(n) {
    if (n === 0) {
        return 0
    } else if (n === -Infinity) {
        return -Infinity
    } else if (n === Infinity) {
        return Infinity
    }
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }
    
    let intPart = floor(n);
    let fractPart = n - intPart;
    
    if (fractPart >= 0.5) {
        intPart++;
    }
    
    let result = intPart;
    if (isNegative) {
        result = -result;
    }
    return result;
}

function ceil(n) {
    if (n === 0) {
        return 0
    } else if (n === -0) {
        return -0
    } else if (n === -Infinity) {
        return -Infinity
    } else if (n === Infinity) {
        return Infinity
    }
    let isNegative = false;    
    let intPart = floor(n);
    let fractPart = n - intPart;
    
    if (fractPart > 0) {
        intPart++; 
    }    
    let result = intPart;  
    return result;
}
function trunc(n) {
    if (n === 0) {
        return 0
    } else if (n === -0) {
        return -0
    } else if (n === -Infinity) {
        return -Infinity
    } else if (n === Infinity) {
        return Infinity
    }
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }
    
    let intPart = floor(n);
    
    let result = intPart;
    if (isNegative) {
        result = -result;
    }
    return result;
}
function floor(n) {
    if (n === 0) {
        return 0
    } else if (n === -0) {
        return -0
    } else if (n === -Infinity) {
        return -Infinity
    } else if (n === Infinity) {
        return Infinity
    }
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }
    
    let result = 0;
    while (n >= 1) {
        result++;
        n -= 1;
    }
    
    if (isNegative) {
        if (n > 0) {
            result = -result - 1; 
        } else {
            result = -result; 
        }
    }
    
    return result;
}

const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))



