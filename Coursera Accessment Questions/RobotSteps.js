// robot can only move in 2 types:
// 1 - (x, y) => (x + y, y)
// 2 - (x, y) => (x, x + y)

// return 'Yes' or ' No'

// [1,2] & [2,1] => No 
// [1,4] & [5,9] & [5,14] => Yes

// backwards approach
// if end is bigger than start, go backwards
// if (x > y) => ( x - y, y)
// if (x < y) => ( x, y - x)

const checkStepsBackwards = (start, end) => {
    if ( start[0] === end[0] && start[1] === end[1] ) {
        return 'Yes';
    }
    else if ( start[0] < end[0] || start[1] < end [1] ) {
        let x2 = end[0];
        let y2 = end[1];
        if (x2 > y2) {
            end = [x2 - y2, y2]
        }
        else {
            end = [x2, y2 - x2]
        }
        return checkStepsBackwards(start, end)
    }
    else {  
        return 'No';
    }
}

console.log(checkStepsBackwards([1,2],[1,2]))
console.log(checkStepsBackwards([1,4],[5,9]))
console.log(checkStepsBackwards([1,4],[5,14]))
console.log(checkStepsBackwards([1,4],[19,14]))
