// Implementation of a Stack, made up of nodes.

class Node {
    constructor(data) { 
      this.data = data; this.next = null 
    }
  }
  
  class Stack {
    constructor(data) {
      this.bottom = new Node(data)
    }
  
    appendNode(data) {
      let current = this.bottom
  
      while (current.next) {
        current = current.next
      }
      current.next = new Node(data)
    }
  
    top = () => {
      // iterate until it finds the end of the stack
      let top = this.bottom

      while (top.next) {
          top = top.next
      }
      return top
    }
  
    modifyEndOfStack = (data) => {
      let penultimate = this.bottom

      while (penultimate.next.next) {
          penultimate = penultimate.next
      }
      penultimate.next = null
    }

    remove = () => {
        let top = this.top()
    }
  }
  
  const stack = new Stack(0)
//   console.log(stack)
  stack.appendNode(1)
  stack.appendNode(2)
  stack.appendNode(7)
//   console.log(stack)
//   console.log(stack.top())
console.log(stack.bottom)
console.log(stack.top())

stack.modifyEndOfStack(3)
console.log(stack.top())
