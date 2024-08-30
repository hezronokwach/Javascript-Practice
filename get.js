const get = (src, path) => {
  const keys = path.split('.');
  let result = src;
  keys.forEach((element) => {
    if (result === undefined){
      return result
    }
     result = result[element]
    
  });
  return result
}
  
  console.log(get({ a: [{ b: 't' }] }, 'a.0.b.toString'))
//   const src = { nested: { key: 'peekaboo' } };
//   const path = 'nested.key';
//   console.log(get(src, path)); // -> 'peekaboo'
//   console.log(get({ key: 'value' }, 'key'))
  
//   console.log(get(src, 'nested')); // -> { key: 'peekaboo' }
