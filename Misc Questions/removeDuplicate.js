// remove duplicate in a string

let test = 'hello'

const removeDuplicate = (input) => {
    let charMap = {}
    let inputList = input.toLowerCase().split('')
    for ( let i = 0; i < inputList.length; i++ ) {
        if ( !(inputList[i] in charMap) ) {
            charMap[inputList[i]] = 1
        }
        else {
            charMap[inputList[i]]++
        }
    }
    
    let filtered = Object.keys(charMap).filter(e => charMap[e] === 1).join('')
    return filtered 
}

console.log(removeDuplicate(test))