function sign(num) {
    if (num < 0) {
        return -1
    }
    if (num > 0) {
        return 1
    }
    if (num === 0) {
        return 0
    }
}

function sameSign(num1, num2){
    if (num1 < 0 && num2 < 0){
        return true
    } else if (num1 > 0 && num2 > 0){
        return true
    } else if (num1 == 0 && num2 == 0){
        return true
    }
    return false
}
