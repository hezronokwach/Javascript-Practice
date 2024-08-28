//String.prototype.repeat = undefined
var result = ""
const repeat = (args, num) => {

    while (num > 0) {
        result += args
        num--
    }
    return result
}
