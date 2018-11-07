// swap number without using temp

const swapNumber = (x,y) => {
    console.log('before swap', 'x:', x, 'y:', y)
    y = y - x
    x = x + y
    y = x - y
    console.log('after swap', 'x:', x, 'y:', y )
}

swapNumber(4,3)

// bit manipulation
const swapNumber2 = (x,y) => {
    console.log('before swap', 'x:', x, 'y:', y)
    x = x ^ y
    y = x ^ y
    x = x ^ y
    console.log('after swap', 'x:', x, 'y:', y )
}

swapNumber2(9,6)