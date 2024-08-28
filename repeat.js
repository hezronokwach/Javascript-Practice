//String.prototype.repeat = undefined
let count = 0;
let result = ""
const repeat = (args, num) => {

    while (count < num) {
        count++
        result += args
    }
    return result
}
console.log(repeat("h", 5))