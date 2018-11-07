
const reverseString = (str) => {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

const reverseString2 = (str) => {
    let results = ''

    for ( let i = str.length - 1; i >= 0; i-- ) {
        results += str[i]
    }
    return results
}

console.log(reverseString2('hello'))

const reverse = (str) => {
    if (str === '') {
        return ''
    }
    else {
        return reverse(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverse('hello'))

String.prototype.reverse = function() {
    if ( !this || this.length < 2 ) {
        return this
    }
    else {
        return this.split('').reverse().join('')
    }
}

console.log('hello'.reverse())