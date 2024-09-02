const isValid = (date) => !isNaN(new Date(date).getTime()) ? true : false
const isAfter= (date1,date2) => (new Date(date1)) > new Date(date2) ? true : false
const isBefore= (date1,date2) => (new Date(date1)) < new Date(date2) ? true : false
const isFuture = (date) => !isNaN(new Date(date).getTime()) > new Date() ? true : false
const isPast = (date) => !isNaN(new Date(date).getTime()) < new Date() ? true : false

// console.log(isValid(NaN))
// console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
// console.log(isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
// console.log(isFuture(new Date('1992-01-01')))