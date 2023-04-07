const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(top=null){
    this.top = top;
  }
  isEmpty() {
    return this.top === null;
  }
  
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  peek() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  size(){
    let count = 0
    let currData = this.top
    while (currData){
      count++
      currData = currData.next
    }
    return count
  }

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

  
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  count(){
    return this.size;
  }

  getLast(){
    return this.last;
  }

  findMax(){
    let current = this.first
    let max = current.data
    while(current){
      if(current.data > max){
        max = current.data
      }
      current = current.next
    }
    return max
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
