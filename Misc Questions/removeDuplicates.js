
let test = [4,3,5,2,7,8,9,6,5,3,1,3,4]
let test2 = [1,1,1,1,1,1,2,2,2,3,4,5,5,5,5,5,7]
const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}

console.log(removeDuplicates(test))
console.log(removeDuplicates(test2))

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