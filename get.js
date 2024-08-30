const get = (src, path) => {
  const keys = path.split('.');
  let result = src;  
  for (let i = 0; i < keys.length; i++) {
    if (result == null) {
      return undefined; 
    }
    result = result[keys[i]];
  }  
    return typeof result === 'function' ? result() : result;
}


// Test case
 //console.log(get({ a: [{ b: 't' }] }, 'a.0.b') )
// console.log(get({ a: [{ b: 't' }] }, 'a.0.b.toString')); // [Function: toString]
