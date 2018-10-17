let test = [2,6,9,3,7,8,4]

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