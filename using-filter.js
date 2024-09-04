const filterShortStateName = (arr) => {
    return arr.filter((word) => word.length < 7);
}

const filterStartVowel = (arr) => {
    const vowels = 'aeiou';
    return arr.filter((word) => vowels.includes(word[0]));
}
const filter5Vowels = (arr) => {
    const vowels = 'aeiou';
    return arr.filter(word => {
        let count = 0;
        for (let char of word) {
            if (vowels.includes(char)) {
                count++;
            }
            if (count >= 5) return true;
        }
        return false;
    });
};

const filter1DistinctVowel = (arr) => {
    const vowels = 'aeiou';
    return arr.filter(word => {
        const wordVowels = word.toLowerCase().replace(/[^aeiou]/g, '');
        return wordVowels.length > 0 && new Set(wordVowels).size === 1;
    });
};
const multiFilter = (arr) => {
  const vowels = 'aeiouAEIOU';
  
  return arr.filter(obj => {
    if (obj.capital.length < 8) return false;
    if (vowels.includes(obj.name[0])) return false;
    if (!obj.tag.split('').some(char => vowels.includes(char))) return false;
    if (obj.region === 'South') return false;
    return true;
  });
};


console.log(filter5Vowels(['Woooooord', 'apple', 'boy']))