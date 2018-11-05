
const findPrimeFactors = (n) => {
    let divisor = 2 
    let factors = []

    while ( n > 2 ) {
        if ( n % divisor === 0 ) {
            factors.push(divisor)
            n = n / divisor
        }
        else {
            divisor++
        }
    }
    return Array.from(new Set(factors))
}

console.log(findPrimeFactors(69))
console.log(findPrimeFactors(100))