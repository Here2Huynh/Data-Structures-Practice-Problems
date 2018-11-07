
const reverseWords = (sentence) => {
    return sentence.split(' ').reverse().join(' ')
}

let sentence = 'i am sleepy'
let sentence2 = 'now i m sleepy'
console.log(reverseWords(sentence))
console.log(reverseWords(sentence2))

const reverseWordsInPlace = (sentence) => {
    return sentence.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseWordsInPlace(sentence))
console.log(reverseWordsInPlace(sentence2))
