const triangle = (value, number) => {
    let result = ""
    for (let i = 1; i < number; i++){
        result += value.repeat(i) + '\n'
    }
    return result += value.repeat(number)

}
console.log(triangle('#', 4))