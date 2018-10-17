// given
let SinglyLinkedListNode = ( data ) => {
    this.data = data
    this.next = null
}

const insertNodeAtTail = ( head, data ) => {
    let node = SinglyLinkedListNode(data)

    // if head is null, return head as linked list with given data, base case
    if ( head === null ) {
        head = node
        return head
    }

    let current = head
    // if current.next is not null
    while ( current.next ) {
        // increment current to the next node until it is at the end of the list
        current = current.next
    }

    // add the node at the end of the node
    current.next = node 
    
    return head 
}

// test data
const data = [ 141, 302, 164, 530, 474 ]

console.log(insertNodeAtTail(null,[ 141, 302, 164, 530, 474 ] ))