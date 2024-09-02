const firstDayOfWeek = (week, year) => {
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    while (date.getDay() !== 1) {
        date.setDate(date.getDate() - 1);
    }
    if (date.getFullYear() < year) {
        return new Date(year, 0, 1).getDate();
    }
    return date.getDate();
};