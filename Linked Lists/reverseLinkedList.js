//reverse linked list, iteratively and recursively

// singly linked list
const linkedList = (value) => {
    this.value = value
    this.next = null
}

// iteratively is too basically convery the linked list to an array 
// and then reverse that and then add it back
// const reverseLinkedListIter = (head) => {
//     let result = null;
//     let stack = []
    
//     let current = head
//     while (current.next) {
//         stack.push(current)
//         current = current.next 
//     }
//     console.log(stack)
//     // set head to be the end of the array 
//     result = stack.pop() || [];
//     console.log()
//     current = result

//     while (current) {
//         current.next = stack.pop()
//         current = current.next
//     }

//     return result
// }

const reverseLinkedListIter = (head) => {
    let current = head 
    let previous = null
    let next = null

    // while current is NOT null or at the end 
    while (current) {
        // set the next to be the next increment 
        next = current.next
        // point current.next to previous for so it is point backwards to previous
        current.next = previous
        
        // these two steps are to increment the to the next nodes in the linked list 
        previous = current
        current = next 
    }
    
    // once while loops is done, previous is the new head that has all the nodes pointed in reversed order
    return previous
}

const reverseLinkedListRecur = (current, previous) => {
    if ( current.next ) {
        const newHead = reverseLinkedListRecur(current.next, current)

        current.next = previous 
        // pass new head up to the list
        return newHead 
    }

    current.next = previous
    return current // base case returns the tail 
}

const testLinkedList1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const testLinkedList2 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(reverseLinkedListRecur(testLinkedList1))
console.log(reverseLinkedListIter(testLinkedList2))