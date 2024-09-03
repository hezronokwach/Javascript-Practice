const dayOfTheYear = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
    }
    
    let dayCount = day;
    for (let i = 0; i < month; i++) {
        dayCount += daysInMonth[i];
    }
    
    return dayCount;
}

console.log(dayOfTheYear(new Date('1600-12-31')))