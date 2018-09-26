const reverseStringBrutal = (str) => {
    let reversedString = ''
    let listOfLetters = str.split('')
    for (let i = listOfLetters.length - 1; i >= 0; i--) {
        reversedString += listOfLetters[i]
    }
    return reversedString
}

console.log( reverseStringBrutal('hello') )


const reverseStringRecursive = (str) => {
    if ( str === '' ) {
        return ''
    }
    else {
        return reverseStringRecursive( str.substr(1)) + str.charAt(0)
    }
}

console.log( reverseStringRecursive('hello') )


const reverseStringBuiltIn = (str) => {
    return str.split('').reverse().join();
}

console.log( reverseStringBuiltIn('hello') )