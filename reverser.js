const reverse = (value) => {
    let result = [];
    
    for (let i = value.length - 1; i >= 0; i--) {
      result.push(value[i]);
    }
    
    return typeof value === 'string' ? result.join('') : result;
  };
  
  console.log(reverse('pouet'));  // Output: 'teuop'
  console.log(reverse([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]