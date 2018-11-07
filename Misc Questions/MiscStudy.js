// scoping
(function() {
    var a = b = 5;
})();
  
console.log(b);


// high order functions
const multiply = (a) => {
    return (b) => {
        return a * b 
    }
}

console.log(multiply(5)(6))

// callback function
// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. 
const modifyArr = ( arr, callback ) => {
    arr.push(100)
    callback()
}

let arr = [1,2,3,4,5]

modifyArr( arr, () => {
    console.log('array has been modified', arr )
})

// factorial 
const factorial = (n) => {
    if ( n === 0 || n === 1 ) { 
        return 1
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))

// fizzbizz
// divisible by 2 is fizz
// divisible by 5 is bizz
// divisble by 2 and 5 is fizzbizz
const fizzBizz = (arr) => {
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 0  && arr[i] % 5 === 0 ) {
            console.log('fizzbizz')
        }
        else if ( arr[i] % 2 === 0 ) {
            console.log('fizz')
        }
        else if ( arr[i] % 5 === 0 ) {
            console.log('bizz')
        }
        else {
            console.log(arr[i])
        }
    }
}

fizzBizz([1,2,3,4,5,6,7,8,9,10])