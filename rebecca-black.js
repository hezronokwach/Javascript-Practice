const isFriday = (date) => (date).getDay() === 5;
const isWeekend = date => date.getDay() % 6 === 0;
const isLeapYear = date => (date.getFullYear(), 1, 29 === 29);
const isLastDayOfMonth = (date = new Date()) => date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// console.log(isFriday(new Date('2014-08-29')))
// console.log(isLeapYear(new Date('2000-02-29')))
// console.log(isLastDayOfMonth(new Date('2015-08-1')))