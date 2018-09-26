const reverseArray = (a) => {
    let result = []
    for ( let i = a.length - 1; i >= 0; i--) {
        result.push(a[i])
    }
    return result
}

console.log( reverseArray( [1, 4, 3, 2] ) )