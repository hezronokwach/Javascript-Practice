const dayOfTheYear = (date) => {
    let firstDay = new Date(date.getFullYear(), 0 ,0);
    return Math.floor((new Date(date) -firstDay)/(1000 * 60 * 60 * 24))
}

console.log(dayOfTheYear(new Date('1600-12-31')))