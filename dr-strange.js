const addWeek=(date) =>{
  // Step 1: Function is defined with date parameter

  // Step 2: Calculate days since epoch
  const epochStart = new Date('0001-01-01');
  const daysSinceEpoch = Math.floor((date - epochStart) / (1000 * 60 * 60 * 24));

  // Step 3: Calculate which day of the 14-day week
  const dayIndex = daysSinceEpoch % 14;

  // Step 4: Create array of 14 day names
  const weekDays = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
  ];

  return weekDays[dayIndex];
}
const timeTravel = (obj) => {
    let date = new Date(obj.date);
    date.setHours(obj.hour);
    date.setMinutes(obj.minute);
    date.setSeconds(obj.second);
    return date;
  }

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
  )