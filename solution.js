const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
    this.data=data
    this.next=null
  }
}

class Stack{
  constructor(top = null){
    this.top=top
  }
  push(data){
    const newItem= new Node(data)
  if (!this.top) {
    this.top = newItem;
  } 
  else{
    newItem.next= this.top;
    this.top=newItem
  }
  }

  isEmpty(){
    return this.top===null
  }

  pop(){
    let node = this.top;
    this.top = node.next ;
    return node
  }

  size(){
    let count = 0
    let node = this.top
    while(node){
      count++
      node = node.next
    }
    return count
  }

  peek(){
    if(this.isEmpty()){
      throw new Error ('Stack is empty')
    }
    else{
      return this.top
    }
  }

findMin() {
  if (this.top === null) {
    throw new Error("The Stack is empty")
  }

  let node = this.top
  let min = node.data

  while (node !== null) {
    if (node.data < min) {
      min = node.data
    }
    node = node.next
  }

  return min
}

sort() {
  if (this.top === null) {
    return
  }

  const tempStack = new Stack()
  let tempNode

  while (!this.isEmpty()) {
    tempNode = this.pop()

    while (!tempStack.isEmpty() && tempStack.peek().data > tempNode.data) {
      this.push(tempStack.pop().data)
    }

    tempStack.push(tempNode.data)
  }

  while (!tempStack.isEmpty()) {
    this.push(tempStack.pop().data)
  }
}

}


class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
}

enqueue(data){
  let node = new Node(data)

  if(!this.first){

      this.first = node
      this.last = node
  }
  else{

      this.last.next = node
      this.last = node
  }
  return ++this.size
}

dequeue() {
  if (this.first === null) {
    throw new Error("The queue is empty");
  }

  let dequeuedItem = this.first;
  this.first = this.first.next;
  this.size--;

  if (this.size === 0) {
    this.last = null;
  }
  return dequeuedItem.data; 
}


peek(){
  if(this.first === null){
      throw new Error("The queue is empty")
  }
  return this.first 
}

count(){
   return this.size
}

isEmpty(){
  return this.first === null
}

getLast(){
  return this.last
}

findMax(){
  if (this.first === null) {
    throw new Error("The queue is empty");
  }

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


}





module.exports = {
  Node,
  Queue,
  Stack,
};
