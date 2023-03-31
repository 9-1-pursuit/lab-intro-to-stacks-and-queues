const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
}

enqueue(data){
  const newItem = new Node(data)
  if(!this.first){
      this.first = newItem
      this.last = newItem
  } else {
      this.last.next = newItem
      this.last = newItem
  }
  return ++this.size
}

isEmpty(){
  return !this.first
}

dequeue(){
  let remove = this.first
  this.first = this.first.next
  this.size--

  if (this.size === 0){
    this.last = null
  }
  return remove.data
}

count(){
  return this.size
}

findMax(){
  let node = this.first;
  let max = node.data;

  while (node !== null) {
    if (node.data > max) {
      max = node.data;
    }
    node = node.next;
  }
  return max;
}

peek(){
  return this.first;
}

getLast (){
  return this.last
}

}

class Stack {
  constructor(top=null){
      this.top = top
  }

  push(data){
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
}

isEmpty(){
    return this.top === null
}

peek(){
    if(this.isEmpty()){
        throw new Error('Stack is empty!')
    } else {
        return this.top
    }
}

pop(){
    let newItem = this.top
    this.top = newItem.next
    return newItem
}
size(){
  let count = 0 
  let node = this.top
  while (node){
    count ++
    node = node.next 
  }
  return count 
}

findMin(){
  let node = this.top
  let min = node.data

  while (node !== null){
    if (node.data < min){
      min = node.data
    }
    node = node.next
  }
  return min
}

sort() {
  const stack = new Stack()
  let node

  while (!this.isEmpty()) {
    node = this.pop()

    while (!stack.isEmpty() && stack.peek().data > node.data) {
      this.push(stack.pop().data)
    }
    stack.push(node.data)
  }
  while (!stack.isEmpty()) {
    this.push(stack.pop().data)
  }
}

}
module.exports = {
  Node,
  Queue,
  Stack,
};
