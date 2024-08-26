function dogYears(planet, age) {
    const earthYearInSeconds = 31557600;
    const planetYears = {
        'earth': 1,
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132
    };
    let result;

    if (planet === 'earth') {
        result = ((age / earthYearInSeconds) * 7);
    } else if (planet in planetYears) {
        result = ((age / (planetYears[planet] * earthYearInSeconds)) * 7);
    } else {
        result = 0;
    }
    return parseFloat(result.toFixed(2));
}
