function concatStr(arg1, arg2) {

    return JSON.stringify(arg1) + JSON.stringify(arg2)
}
console.log(concatStr(1, 2))