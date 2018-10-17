// given
let singlyLinkedList = (data) => {
    this.data = data
    this.next = null
}
const insertNodeAtHead = (head, data) => {
    let node = new SinglyLinkedList(data)
    node.next = head 
    return node 
}