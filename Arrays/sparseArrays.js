// given strings = ['ab', 'ab', 'abc'] and query = ['ab', 'abc', 'bc']
// should return results = [2, 1, 0]
// 2 'ab'
// 1 'abc'
// 0 'bc'


const sparseArrays = (strings, queries) => {
    let result = []

    for ( let i = 0; i < queries.length; i++ ) {
        let queryCount = 0
        let stringIndex = 0
        while ( stringIndex < strings.length ) { 
            if ( queries[i] === strings[stringIndex] ) {
                queryCount++
            }
            stringIndex++
        }
        // console.log(queryCount)
        result.push(queryCount)
    }
    return result
}

console.log( sparseArrays(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']) )