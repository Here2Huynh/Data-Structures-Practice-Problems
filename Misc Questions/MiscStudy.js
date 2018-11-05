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


