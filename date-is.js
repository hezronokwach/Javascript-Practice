const isValid = (date) => {
    if (typeof date === 'string') return false;
    return !isNaN(new Date(date).getTime());
}; 
const isAfter= (date1,date2) => (new Date(date1)) > new Date(date2) ? true : false
const isBefore= (date1,date2) => (new Date(date1)) < new Date(date2) ? true : false
const isFuture = (date) => new Date(date) > new Date();
const isPast = (date) => new Date(date) < new Date();
 console.log(isValid('2013-01-01'))
// console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
// console.log(isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
// console.log(isFuture(new Date('1992-01-01')))