const countLeapYears = (date) => {
    const year = date.getFullYear();

    // Count years divisible by 4 from year 1
    let count = Math.floor((year - 1) / 4);

    // Subtract years divisible by 100 but not by 400
    count -= Math.floor((year - 1) / 100);
    count += Math.floor((year - 1) / 400);

    // Adjust for the current year
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        const isBeforeLeapDay = date.getMonth() < 2 || (date.getMonth() === 1 && date.getDate() < 29);
        if (isBeforeLeapDay) {
            count--;
        }
    }

    return count;
}

console.log(countLeapYears(new Date('1664-08-09')));