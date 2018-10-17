// print fizz on number divisible by 2 and print bizz on numbers divisible by 5 

const fizzBizz = (input) => {
    for ( let i = 0; i < input.length; i++ ) {
        if ( input[i] % 2 === 0 && input[i] % 5 === 0 ) {
            console.log('fizzbizz')
        }
        else if ( input[i] % 2 === 0 ) {
            console.log('fizz')
        }
        else if ( input[i] % 5 === 0 ) {
            console.log('bizz')
        }
    }
}

console.log(fizzBizz([1,2,3,4,5,6,7,8,9,10]))