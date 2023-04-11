const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) return null;
    let removedNode = this.top;
    this.top = this.top.next;
    removedNode.next = null;
    return removedNode;
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (this.top === null) return null;
    let currentNode = this.top;
    let minValue = currentNode.data;
    while (currentNode !== null) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minValue;
  }

  peek() {
    return this.top;
  }

  sort() {
    const tempStack = new Stack();
    let tempNode;
    
    while (!this.isEmpty()) {
      tempNode = this.pop();
    
      while (!tempStack.isEmpty() && tempStack.peek().data < tempNode.data) {
        this.push(tempStack.pop().data);
      }
    
      tempStack.push(tempNode.data);
    }
    
    this.top = tempStack.top;
  }
  
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
    if (this.max === null || data > this.max) {
      this.max = data;
    }
  }

  dequeue() {
    if (this.isEmpty()) return null;
    let removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    if (this.isEmpty()) {
      this.last = null;
      this.max = null;
    }
    return removedNode.data;
  }

  findMax() {
    return this.max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
  }
}


module.exports = {
  Node,
  Queue,
  Stack,
};
