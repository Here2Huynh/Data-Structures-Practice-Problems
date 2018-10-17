// merge sort
// splits the array down the middle, then splits the left and right arrays
// further down until the arrays have 2 elements
// then piece all the split up arrays back up into a new array 
// starting with smallest element first 
// time complexity = O(nlog(n))
// space complextiy = O(n), a new array has to be created 

let test = [2,6,9,3,7,8,4,5]
let test2 = [12,3,6,8,9,6,53,5,64,34,5,21,2,3,4,5,9]

// split the arrays in half until it is at 2 elements 
const splitArray = (arr) => {
    // base case of 2 element array
    if ( arr.length < 2 ) {
        return arr
    }

    let middleIndex = Math.floor(arr.length / 2 )
    let leftArray = arr.slice(0, middleIndex) 
    console.log(leftArray)
    let rightArray = arr.slice(middleIndex)
    console.log(rightArray)

    return mergeSort(splitArray(leftArray),splitArray(rightArray))
}

const mergeSort = (left, right) => {
    let result = [] 
    
    while ( left[0] && right[0] ) {
        // if left is smaller, add it into the array first and vice versa
        if ( left[0] < right[0] ) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    // in the case that left and right has 2 elements, we need to concat them to the array 
    return result.concat(left.slice().concat(right.slice()))
}

console.log(splitArray(test))
console.log(splitArray(test2))