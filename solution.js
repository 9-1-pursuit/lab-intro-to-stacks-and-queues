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
    this.top = top;
  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop() {
    let newItem = this.top;
    this.top = newItem.next;
    return newItem;
  }

  size() {
    let count = 0;
    let newItem = this.top;
    while (newItem) {
      count++;
      newItem = newItem.next;
    }
    return count;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  findMin() {
    let minVal = [];

    let newItem = this.top;

    while (newItem) {
      minVal.push(newItem.data);
      newItem = newItem.next;
    }
    return minVal.sort()[0];
  }
  
  sort() {
    let minVal = [];

    let newItem = this.top;

    while (newItem) {
      minVal.push(newItem.data);
      newItem = newItem.next;
    }
    minVal.sort();
    this.top.data = minVal[0];
    return newItem;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
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

  dequeue() {
    if (this.first === null) {
      return null;
    }
    const item = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return item.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first) {
      return this.first;
    }
  }
  getLast() {
    if (this.last) {
      return this.last;
    }
  }

  findMax() {
    if (!this.first) {
      return null;
    }

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
}
module.exports = {
  Node,
  Queue,
  Stack,
};
