const pyramid = (value, number) => {
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += " ".repeat(number - i).repeat(value.length);
        result += value.repeat(i * 2 - 1);
        if (i === number) {
            return result;
        }
        result += '\n'
    }
    return result;
};

// Test
// console.log(pyramid('{}', 12));
// console.log(pyramid('ABC', 7))

