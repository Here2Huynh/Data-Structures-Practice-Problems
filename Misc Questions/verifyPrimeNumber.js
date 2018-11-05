// prime number is only divisible by itself and 1
const isPrime = (num) => {
    let divisor = 2

    while ( num > divisor ) {
        if ( num % divisor === 0 ) { return false }
        else { divisor++ }
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(9))
console.log(isPrime(8))
console.log(isPrime(137))
console.log(isPrime(237))