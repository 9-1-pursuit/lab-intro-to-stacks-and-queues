const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(top = null){
    this.top = top
  }

  // push adds an item to the stack
  push(data){
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }

  // size returns the number of items in the stack
  size(){
    let current = this.top
    let size = 0
    while (current){
      size++
      current = current.next 
    }
    return size
  }

  // pop removes from the top of the stack
  pop(){
    let item = this.top
    let newTop = item.next
    this.top = newTop
    return item
  }

  // isEmpty checks if the stack is empty and returns a boolean
  isEmpty(){
    return this.top ? false : true
  }
}

class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
