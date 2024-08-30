const get = (src, path) => {
  const keys = path.split('.');
  let result = src;
  
  for (let i = 0; i < keys.length; i++) {
    if (result == null) {
      return undefined;
    }
    if (i === keys.length - 1 && typeof result[keys[i]] === 'function') {
      return keys[i];
    }
    result = result[keys[i]];
  }
  
  return result;
}

// Test case
// const obj = { a: [{ b: t }] };
// console.log(get(obj, 'a.0.b.toString')); // Should output: 'toString'

// console.log(get({ a: [{ b: 't' }] }, 'a.0.b.toString')); // [Function: toString]
