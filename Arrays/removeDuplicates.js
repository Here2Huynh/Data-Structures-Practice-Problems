
let arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}


console.log(removeDuplicates(arr))


const removeDuplicates2 = (arr) => {
    let seen = {}
    let results = [] 

    for ( let i = 0; i < arr.length; i++ ) {
        if ( !seen[arr[i]] ) {
            results.push(arr[i])
            seen[arr[i]] = true
        }
    }
    return results
}

console.log(removeDuplicates2(test))
console.log(removeDuplicates2(test2))