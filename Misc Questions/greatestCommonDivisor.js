
const greatestCommonDivisor = ( x,y ) => {
    let divisor = 2 
    let greatestDivisor = 1

    // check for negative numbers 
    if ( x < 0 || y < 0 ) {
        console.log('Not compatiable with negative numbers.')
    }

    // base case
    if ( x < 2 || y < 2 ) {
        return 1
    } 

    while ( x >= divisor && y >= divisor ) {
        if ( x % divisor === 0 &&  y % divisor === 0 ) {
            greatestDivisor = divisor
        }
        divisor++
    }
    return greatestDivisor
}

console.log(greatestCommonDivisor(14,21))
console.log(greatestCommonDivisor(69,169))

const greatestCommonDivisor2 = ( x,y ) => {
    if ( y === 0 ) {
        return x
    }
    else {
        return greatestCommonDivisor2(y, x % y)
    }
}

console.log(greatestCommonDivisor2(14,21))
console.log(greatestCommonDivisor2(69,169))
