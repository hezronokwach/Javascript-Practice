const matchCron = (cronExpression, date = new Date()) => {
    let store = cronExpression.split(' ');
    let d = date instanceof Date ? date : new Date(date);
    let dateStore = [
        d.getMinutes(),
        d.getHours(),
        d.getDate(),
        d.getMonth() + 1,
        d.getDay() === 0 ? 7 : d.getDay()  // Convert Sunday from 0 to 7
    ];

    for (let i = 0; i < 5; i++) {
        if (store[i] !== '*' && parseInt(store[i]) !== dateStore[i]) {
            return false;
        }
    }
    return true;
};

console.log(matchCron('9 * * * *', '2020-02-31 18:09:00'))