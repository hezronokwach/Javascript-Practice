const letterSpaceNumber = (value) => {
    const pattern = /[a-zA-Z] [0-9]\b/g
    let result= value.match(pattern);
    return result || []
}
console.log(letterSpaceNumber('example 1, example 20'))
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
console.log((letterSpaceNumber('I like 7up.')))