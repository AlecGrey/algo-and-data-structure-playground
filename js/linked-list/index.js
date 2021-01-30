// create linked-lists in an object-oriented fashion.
// class Node contains data, and reference to a 'next'
// class linkedList contains the head node and the logic to search the linked
// list for specific nodes

const dogs = ['lab', 'labrodoodle', 'goldie', 'chihuahua', 'husky', 'australian shepherd', 'german shepherd', 'cocker spaniel', 'vizsla', 'redbone hound', 'plot hound', 'king charles spaniel', 'brussel griffon']

class Node {

    constructor(data) {
        this.data = data
        this.next = null
    }

}

class LinkedList {
    // stores data as a node, links subsequent nodes 
    constructor(data = null) {
        if (!!data) {
            this.head = new Node(data)
        } else {
            this.head = null
        }
    }

    appendNode(data) {
        // set the last node's next to a new node with the data
        // if the linked list is empty, set the head equal to the new node
        if (!this.lastNode()) {
            this.head = new Node(data)
            return
        }
        this.lastNode().next = new Node(data)
    }

    lastData() {
        // find the last node, return the data.  If linked list is empty, return null
        if (!this.lastNode()) {return null}
        return this.lastNode().data
    }

    lastNode() {
        // gets data from last node.  If there are no nodes, return message
        let currentNode = this.head
        // check to see if head is null, aka list is empty
        if (!currentNode) {return null}
        // iterate until last node is found
        while (currentNode.next !== null) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    deleteNode(data) {
        // search the linked list for the node with the data, remove from the list and stitch the list back together
        let currentNode = this.head

        // if the head is the desired node, re-assign the head.  If there is no next node, the head is now null.
        if (currentNode.data === data) {
            this.head = !!currentNode.next ? currentNode.next : null
            return
        }

        while (currentNode.next.data !== data) {
            // the next node is not the right one! Check to see if the following one is null, 
            // if so the node is not in the linked list, if not keep iterating
            if (currentNode.next.next === null) {return 'node not found'}
            currentNode = currentNode.next
        }
        // we found the node! stitch together nodes to remove desired node from database.
        // if the deleted node was last in the database, set null to the previous 'next'
        currentNode.next = !!currentNode.next.next ? currentNode.next.next : null
    }

    constructArray() {
        // construct an array from linked list nodes
        const arr = []
        let currentNode = this.head
        if (!currentNode) {return arr}

        // loop until if statement in block passes, then return array
        while (true) {
            arr.push(currentNode.data)
            if (currentNode.next === null) {return arr}
            currentNode = currentNode.next
        }
    }

}

const lonkedList = new LinkedList(dogs.shift())
// console.log(lonkedList);
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
lonkedList.appendNode(dogs.shift())
// console.log(lonkedList)
debugger

