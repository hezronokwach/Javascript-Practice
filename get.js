const get = (src, path) => {
    const keys = path.split('.');
    let result = src;
    
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return undefined;
      }
    }
    
    return result;
  };
  
//   const src = { nested: { key: 'peekaboo' } };
//   const path = 'nested.key';
//   console.log(get(src, path)); // -> 'peekaboo'
//   console.log(get({ key: 'value' }, 'key'))
  
//   console.log(get(src, 'nested')); // -> { key: 'peekaboo' }
