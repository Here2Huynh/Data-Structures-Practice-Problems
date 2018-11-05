
const recursiveFib = (n) => {
    if ( n <= 1 ) {
        return n
    }
    else {
        return recursiveFib(n-2) + recursiveFib(n-1)
    }
}

console.log(recursiveFib(12))

const fib = (n) => {
    let fibo = [0,1]

    if ( n <= 2 ) {
        return 1
    }

    for ( let i = 2; i <= n; i++ ) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    } 

    return fibo[n]
}

console.log(fib(12))