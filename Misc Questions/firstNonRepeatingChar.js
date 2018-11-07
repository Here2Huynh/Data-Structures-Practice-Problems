let test = "the quick brown fox jumps then quickly blow air"

const findFirstNonRepeatingChar = (input) => {
    let charMap = {}
    let inputList = input.split('')

    // parse through the sentence and map the characters seen
    for ( let i = 0; i < inputList.length; i++ ) {
        if ( !(inputList[i] in charMap) ) {
            charMap[inputList[i]] = 1 
        }
        else {
            charMap[inputList[i]]++
        }
    }

    // iterate through the map and return the one with seen once
    for ( let e in charMap ) {
        if ( charMap[e] === 1 ) {
            return e
        }
    }
}

console.log(findFirstNonRepeatingChar(test))