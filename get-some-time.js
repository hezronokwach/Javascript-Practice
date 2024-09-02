const firstDayOfWeek = (week, year) => {
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }
    if (date.getFullYear() < year) {
        date = new Date(year, 0, 1);
    }
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    return day + '-' + month + '-' + year;
};
console.log(firstDayOfWeek(4, 2022)); // 04-