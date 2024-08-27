function isPositive(num) {
    if (num > 0) {
        return true
    }
    return false
}

function abs(num) {
    if (num < 0) {
        return -num
    }
    if (num == -Infinity){
        return Infinity
    }
    if (num == 0){
        return 0
    }
}
console.log(abs(0))
