const pronouns = (str) => {
    let pronoun = ["i", "you", "he", "she", "it", "they", "we"];
    let result = {};
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (pronoun.includes(word)) {
            if (!result.hasOwnProperty(word)) {
                result[word] = {word: [], count: 0};
            }
            result[word].count++;
            if (i + 1 < words.length && !pronoun.includes(words[i+1].toLowerCase())) {
                if (!result[word].word.includes(words[i+1])) {
                    result[word].word.push(words[i+1]);
                }
            }
        }
    }
    return result;
}

const ex = 'If he you want to buy something you have to pay.'
console.log(pronouns(ex))