function firstDayWeek(week, year) {
    let date = new Date(year, 0, 1);
    if (week === 1) {
        return formatDate(date);
    }
    
    date.setDate(date.getDate() + (week - 1) * 7);
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }
    
    return formatDate(date);
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = String(date.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
}
console.log(firstDayWeek(1, '1000'))