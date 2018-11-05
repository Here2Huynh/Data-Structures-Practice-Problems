
const isInt = (input) => {
    return input % 1 === 0
}

console.log(isInt(2))
console.log(isInt(2.1))
console.log(isInt(.2))