const vowels = /[aeiouAEIOU]/g;
const vowelDots = (value) => {
    const result = value.replace(vowels, (match) => match + '.');
    return result; 
}
console.log((vowelDots('')))
