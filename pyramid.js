const pyramid = (value, number) => {
    let result = "";
    const maxWidth = 4 * number - 3;  // Width of the widest row
  
    for (let i = 1; i <= number; i++) {
      const rowWidth = 2 * i - 1;  // Width of the current row
      const padding = " ".repeat((maxWidth - rowWidth) / 2);
      const row = value.repeat(rowWidth);
      result += padding + row;
      if (i < number) {
        result += '\n';
      }
    }
  
    return result;
  };
  
