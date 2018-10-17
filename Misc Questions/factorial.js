// factorials
const factorial = (number) => {
    // base case 
    if ( (number === 1) || (number === 0) ) {
        return 1
    }
    else {
        return number * factorial(number - 1);
    }
}

// 4! = 4 * 3 * 2 * 1 
console.log(factorial(4) === 24)
console.log(factorial(0) === 1)
console.log(factorial(1) === 1)
console.log(factorial(2) === 2)
console.log(factorial(6))