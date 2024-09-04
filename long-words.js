const longWords = (arr) => {
    return arr.every(word => typeof word === 'string' && word.length >= 5);
}

const oneLongWord = (arr) => {
    return arr.some(word => typeof word === 'string' && word.length >= 10);
}

const noLongWords = (arr) => {
    return arr.every(word => typeof word === 'string' && word.length < 7);
}
console.log(noLongWords([' we','e']))