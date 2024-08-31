function ionOut(str) {
    const regex = /(\w+)(?=tion)/g;
    const matches = str.match(regex);
    
    return matches ? matches.map(match => match + 't') : [];
  }
  
  console.log(ionOut(' ateention direction'));