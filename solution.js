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
    const newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  pop() {
    if (!this.top) return null;
    const poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;
    return poppedNode;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    if (!this.top) return null;
    let min = this.top.data;
    let currentNode = this.top.next;
    while (currentNode) {
      if (currentNode.data < min) {
        min = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

  sort() {
    if (!this.top) return null;
    const tempStack = new Stack();
    tempStack.push(this.pop().data);
    while (this.top) {
      const tempNode = this.pop();
      while (tempStack.top && tempNode.data < tempStack.peek().data) {
        this.push(tempStack.pop().data);
      }
      tempStack.push(tempNode.data);
    }
    while (tempStack.top) {
      this.push(tempStack.pop().data);
    }
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
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    if (!this.max || data > this.max.data) {
      this.max = newNode;
    }
  }

  dequeue() {
    if (!this.first) return null;
    const dequeuedNode = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      dequeuedNode.next = null;
    }
    this.size--;
    if (dequeuedNode === this.max) {
      let currentNode = this.first;
      let newMax = currentNode;
      while (currentNode) {
        if (currentNode.data > newMax.data) {
          newMax = currentNode;
        }
        currentNode = currentNode.next;
      }
      this.max = newMax;
    }
    return dequeuedNode.data;
  }

  isEmpty() {
    return !this.first;
  }

  peek() {
    return this.first;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    return this.max ? this.max.data : null;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
