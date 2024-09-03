function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function countLeapYears(date) {
    let count = 0
    const year = date.getFullYear();
    for (let i = year; i > 4; i--) {
        if (isLeapYear(i)) {
            count++
        }
    }
    return count
}

console.log(countLeapYears(new Date('2020-01-01')));