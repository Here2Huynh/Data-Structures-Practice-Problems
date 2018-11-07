// iter through arr check if they are in order and then swap them

let test = [2,6,9,3,7,8,4]
let test2 = [12,3,6,8,9,6,53,5,64,34,5,21,2,3,4,5,9]
let test3 = [7,6,5,4,3,2,1]

const bubbleSort = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        for ( let j = 0; j < arr.length; j++ ) {
            if ( arr[j] > arr[j+1]) {
                [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ]
            }
        }
    }
    return arr
}

console.log(bubbleSort(test))
console.log(bubbleSort(test2))
console.log(bubbleSort(test3))

