const { nums, words } = require('./data/data.js');
const { inspect } = require('util');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(data) {
    let newItem = new Node(data);
    this.top = newItem;
    newItem.next = this.top;
  }
  pop() {
    if (this.top === null) {
      throw new Error('the stack is empty');
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
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
  isEmpty() {
    return this.top === null;
  }
  findMin() {
    let node = this.top;
    let current = node.data;

    while (node) {
      if (node.data < current) {
        current = node.data;
      }
      node = node.next;
    }
    return current;
  }
  peek() {
    if (this.top == null) {
      throw new Error('The stack is empty');
    }
    return this.top;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    let newData = new Node(data);
    if (!this.first) {
      this.first = newData;
      this.last = newData;
    } else {
      this.last.next = newData;
      this.last = newData;
    }
    return this.size++;
  }
  dequeue() {
    if (this.first === null) {
      throw new Error('this queue is empty');
    }
    let oldFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.data;
  }
  count() {
    return this.size;
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first == null) {
      throw new Error('The queue is empty');
    }
    return this.first;
  }
  findMax() {
    let node = this.first;
    let max = node.data;

    while (node) {
      if (node.data > max) {
        max = node.data;
      }
      node = node.next;
    }
    return max;
  }
  getLast() {
    return this.last;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
