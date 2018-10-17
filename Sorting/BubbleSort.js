// bubble sort 
// essentially cycles through the array and checks the adjacent element 
// if left element is greater then the right, then swap places 
// time complexity = O(n^2) = involves two loops
// space complexity = O(1), input comes in, gets rearrange and returns as output 

let test = [2,6,9,3,7,8,4]
let test2 = [12,3,6,8,9,6,53,5,64,34,5,21,2,3,4,5,9]

const bubbleSort = (arr) => {
    let swapped
    let swapCount = 0

    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if ( arr[i] > arr [i+1] ) {
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
                swapCount++
                swapped = true
            }
        }
    }
    while (swapped)

    console.log(arr, 'swap count =', swapCount)
    return arr
}

bubbleSort(test)
bubbleSort(test2)

const bubbleSort2 = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            if ( arr[j] > arr[j+1] ) {
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
            }
        }
    }

    console.log(arr, 'swap count = ', swaps)
    return arr
}

bubbleSort2(test)
bubbleSort2(test2)
