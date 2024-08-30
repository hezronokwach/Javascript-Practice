const pyramid = (value, number) => {
    let result = "";
    for (let i = 1; i <= number; i++) {
      const spaces = " ".repeat(number - i);
      const chars = value.repeat(2 * i - 1);
      result += spaces + chars;
      if (i < number) {
        result += '\n';
      }
    }
    return result;
  };
  
  console.log(pyramid('a', 5));