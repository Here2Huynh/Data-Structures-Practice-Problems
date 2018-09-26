
const minimumSwap = (arr) => {
    let templateArray = arr
    let swaps = 0 
    let i = 0 

    while ( i < arr.length - 1 ) {
        let nextIndex = arr[i] - 1

        if ( arr[i] - 1 !== i ) {
            [ arr[i], arr[nextIndex] ] = [ arr[nextIndex], arr[i] ] 
            swaps++
        }
        else {
            i++
        }
    }
    
    if (templateArray.sort() === arr) {
        return swaps 
    }
}

console.log( minimumSwap([4, 3, 1, 2]) )
console.log(minimumSwap( [2, 3, 4, 1, 5] ))
console.log(minimumSwap( [1, 3, 5, 2, 4, 6, 8]) )


