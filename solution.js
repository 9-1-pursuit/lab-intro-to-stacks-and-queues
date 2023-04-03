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

  // peek returns the top item
  peek(){
    return this.top
  }

  // findMin returns the smallest value
  findMin(){
    let current = this.top
    let min = current.data
    while(current){
      if(current.data < min){
        min = current.data
      }
      current = current.next
    }
    return min
  }

  // sort method sorts the stack in ascending order with the smallest value first
  sort(){
    let arr = []

    // start from this.top
    let current = this.top
    
    // loop through stack and push values to array
    while(current){
      arr.push(current.data)
      current = current.next
    }
    
    // sort array
    arr.sort().reverse()

    // push values onto stsck in sorted order
    arr.forEach((val) =>   {
      this.push(val)
    })

    // while(current){
    //   let next = current.next
    //   if(current.data > next.data){
    //     current.next = current
    //     current = next
    //   }
    // }
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
