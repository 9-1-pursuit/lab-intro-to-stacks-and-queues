// const { Node, Stack, Queue } = require("./solution.js");

class Node {
    constructor(data, next = null){
      this.data= data
      this.next = next
    }
  }
  
  class Stack {
    constructor(top = null){
      this.top = top
    }
  }
  /* 

pop
isEmpty check if list is empty
findMin data value
peek top node
sort - sort the stack into ascending order. CHALLENGE only use stacks to achieve this (no arrays or objects etc.)
  */
 function push(data){
    const newStack = new Node(data)
    newStack.next = this.top
    this.top = newStack
 }

 function size(){
    let current = this.top
    let count = 0
    while(current){
        count++
        current = current.next
    }
    return count
 }

 function pop() {
    let current = this.top
    let next = current.next
    this.top = next
    return current
 }

 function isEmpty(){
    return !this.top
 }

 function findMin(){
    let min = 0
    let current = this.top
    while(current){
        if(current.data < min){
            min = current.data
        }
        current = current.next
    }
    return min
 }

 function peek(){
    const val = this.isEmpty()
    return val ? "stack is empty" : this.top
 }

 function sort(){
    
 }


module.exports = {
    push,
    size, 
    pop,
    isEmpty,
    findMin,
    peek,
    // sort
}