const singlyLinkedList = (value) => {
    this.value = value
    this.next = null 
}

const testLinkedList = {
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


const printElementInLinkedList = (head) => {
    while (head) {
        console.log(head.data)
        head = head.next
    }
    
}

// given
// SinglyLinkedListNode { data: 16, next: SinglyLinkedListNode { data: 13, next: null } }