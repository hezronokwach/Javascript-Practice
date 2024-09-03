function sunnySunday(date) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Calculate days since 0001-01-01
    const epochStart = new Date('0001-01-01');
    const totalDays = Math.floor((date - epochStart) / (1000 * 60 * 60 * 24));

    return days[totalDays % 6];
}

console.log(sunnySunday(new Date('0001-01-07')));