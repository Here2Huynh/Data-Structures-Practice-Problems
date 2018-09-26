const fibbonaci = (n) => {
    if ( n < 2 ) {
        return 1;
    }
    else {
        return fibbonaci(n - 2) + fibbonaci(n - 1);
    }
}

console.log(fibbonaci(10))