const invert = (data) => {
    let flipped = Object.entries(data).map(([key,value]) => [value,key]);
    return Object.fromEntries(flipped);    
}