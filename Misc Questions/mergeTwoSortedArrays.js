
const mergeTwoSortedArrays = (arr1, arr2) => {
    let len1 = arr1.length
    let len2 = arr2.length
    let iter1 = 0
    let iter2 = 0 
    let result = []

    while ( iter1 < len1 || iter2 < len2 ) {
        if ( arr1[iter1] > arr2[iter2] ) {
            result.push(arr2[iter2]) 
            result.push(arr1[iter1])
        }
        else {
            result.push(arr1[iter1])
            result.push(arr2[iter2])
        }
        iter1++
        iter2++
    }

    return result.filter(e => typeof(e) !== 'undefined')
}

let a1 = [2,5,6,9]
let a2 = [1,2,3,29]
let t1 = [2,5,6,9]
let t2 = [1,2,3,29,22,33,44]
console.log(mergeTwoSortedArrays(a1,a2))
console.log(mergeTwoSortedArrays(t1,t2))