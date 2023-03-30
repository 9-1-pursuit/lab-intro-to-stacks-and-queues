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
    let newItem = this.top;
    this.top = newItem.next;
    return newItem;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (this.isEmpty()) return null;

    let node = this.top;
    let min = this.top.data;

    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  peek() {
    if (this.top === null) throw new Error("The stack is empty");
    return this.top;
  }

  toAarr() {
    let node = this.top;
    let arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  sort() {
    let stackArr = this.toAarr();
    stackArr.sort();
    this.top = null;

    for (let i = stackArr.length - 1; i >= 0; i--) {
      this.push(stackArr[i]);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  count() {
    let node = this.first;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  dequeue() {
    if (this.first === null) return null;

    let node = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return node.data;
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

  findMax() {
    let node = this.first;
    let max = 0;

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

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};
