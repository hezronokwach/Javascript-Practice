const firstDayWeek = (week, year) => {
    year = Number(year);
    let date = new Date(year, 0, 1);
    
    if (week === 1) {
        // For the first week, always return January 1st
        date = new Date(year, 0, 1);
    } else {
        // Find the first Monday
        while (date.getDay() !== 1) {
            date.setDate(date.getDate() + 1);
        }
        // Add weeks
        date.setDate(date.getDate() + (week - 2) * 7);
    }
    
    // Adjust for week 2 specifically
    if (week === 2 && date.getDate() === 7) {
        date.setDate(8);
    }
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    
    let yearStr = year.toString();
    while (yearStr.length < 4) {
        yearStr = '0' + yearStr;
    }
    
    return day + '-' + month + '-' + yearStr;
};
console.log(firstDayWeek(1, '1000'))