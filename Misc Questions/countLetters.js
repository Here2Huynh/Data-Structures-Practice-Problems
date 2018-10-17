// count the letters in the given string
const countLetters = ( word ) => {
    let result = {};
    for (let i = 0; i < word.length; i++) {
        if (word[i] in result) {
            result[word[i]]++;
        }
        else {
            result[word[i]] = 1
        }
    }
    return result;
}

console.log(countLetters('hello'))