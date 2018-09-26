const leftRotation = (arr, rotationNumber ) => {
    // let result = [];
    // // adds into the result the starting element and remaining of the array
    // for ( let j = rotationNumber; j < arr.length; j++ ) {
    //     result.push(arr[j])
    // }
    // // add the rest of the array from the beginning in 
    // for (let i = 0; i < rotationNumber; i++) {
    //     result.push(arr[i])
    // }
    // return result; 
    for ( let i = 0; i < arr.length - rotationNumber; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

console.log(leftRotation([1,2,3,4,5], 4))
// [ 5, 1, 2, 3, 4 ]

const rightRotation = (arr, rotationNumber) => {
    for ( let i = 0; i < rotationNumber; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

console.log(rightRotation([1,2,3,4,5], 4)) 
// [ 2, 3, 4, 5, 1 ] 

console.log(rightRotation([1,2,3,4,5], 2)) 
// [ 4, 5, 1, 2, 3 ]