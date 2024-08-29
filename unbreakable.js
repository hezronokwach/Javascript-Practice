const split = (value, splitter) => {
    let result = [];
    if (splitter === "") {
        for (let i = 0; i < value.length; i++) {
            result.push(value[i]);
        }
        return result
    }

    let word = "";

    for (let i = 0; i < value.length; i++) {
        if (value.substr(i, splitter.length) === splitter) {
            result.push(word);
            word = "";
            i += splitter.length - 1;
        } else {
            word += value[i];
        }
    }

    result.push(word);

    return result;
};
const join = (value, sep) => {
    let result = ""
    for (let i = 0; i < value.length - 1; i++) {
        result += value[i] + sep
    }
    return result += value[value.length - 1]

}
console.log(join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
console.log(join(['ggg', 'ddd', 'b'], ' - '))
console.log(join(['a', 'b', 'c'], ' '))
console.log(split('', 'rr'))
console.log(split('ee,ff,g,', ','))
