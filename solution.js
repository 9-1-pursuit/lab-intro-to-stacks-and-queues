const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top; // head
    // this.size = 0
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
    //  this.size++
  }

  size() {
    let count = 0;
    let node = this.top;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  pop() {
    if (this.top === null) {
      return null;
    }
    let newItem = this.top;
    this.top = newItem.next;
    // this.size--
    return newItem;
  }

  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let current = this.top;
    let min = current.data;

    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }
  peek() {
    return this.top;
  }
  sort() {
    const stack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!stack.isEmpty() && stack.peek() > temp) {
        this.push(stack.pop());
      }
      stack.push(temp);
    }
    this.top = stack.top;
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null;
    this.size = 0;
  }
  count(){
    return this.size;
  }
  enqueue(data) {
    const newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
