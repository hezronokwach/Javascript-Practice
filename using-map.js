const citiesOnly = (arr) => {
    return arr.map(({ city }) => city);
  }
  const upperCasingStates = (arr) => {
    return arr.map((state) =>
      state.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    );
  };
  const fahrenheitToCelsius = (arr) => {
    return arr.map(temp => {
      const fahrenheit = parseFloat(temp);
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
      return `${celsius}°C`;
    });
  };
  
  const tempForecasts = (arr) => {
    return arr.map(({ city, temperature, state }) => {
      let temp = fahrenheitToCelsius([temperature])
      let finalCity = upperCasingStates([city])
      let finalState = upperCasingStates([state])
  
      return `${temp}elsius in ${finalCity}, ${finalState}`
    });
  }
  
  // const trimTemp = (arr) => {
  //   return arr.map(({ city, temperature }) => ({city,temperature: temperature.trim()}));
  // };
  
  
  // console.log(citiesOnly([{
  //   city: 'Los Angeles',
  //   temperature: '  101 °F   ',
  // },
  // {
  //   city: 'San Francisco',
  //   temperature: ' 84 ° F   ',
  // },
  // ]))
  // console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
  // console.log(trimTemp([
  //   { city: 'Los Angeles', temperature: '  101 °F   ' },
  //   { city: 'San Francisco', temperature: ' 84 ° F   ' },
  // ]) )
  
  // console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
  // console.log(tempForecasts([
  //   {
  //     city: 'Pasadena',
  //     temperature: ' 101 °F',
  //     state: 'california',
  //     region: 'West',
  //   },
  // ]))