
let arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}


console.log(removeDuplicates(arr))


