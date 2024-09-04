const hasCity = (country, arr) => (city) => arr.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;// const cities = ['New York', 'London', 'Paris', 'Tokyo'];
// const isFrenchCity = hasCity(cities, 'France');

// console.log(isFrenchCity('Paris')); // Output: Paris is a city from France
// console.log(isFrenchCity('Berlin')); // Output: Berlin is not a city from France

    
const chineseCities = ['Beijing', 'Shanghai', 'Wuhan', 'Shenzhen', 'Tianjin', 'Chengdu'];
const isChinese = hasCity(chineseCities, 'China');
console.log(isChinese('Beijing'))