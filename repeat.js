//String.prototype.repeat = undefined

const repeat = (args, num) => {
    let result = ""
    while (num > 0) {
        result += args
        num--
    }
    return result
}
