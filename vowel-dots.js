const vowelDots = (value) => {
    const vowels = /[aeiouAEIOU]/g;
    const result = value.replace(vowels, (match) => match + '.');
    return result; 
}
console.log((vowelDots('')))
