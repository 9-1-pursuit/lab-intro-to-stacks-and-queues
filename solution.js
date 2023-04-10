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
    let node = this.top;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  pop() {
    let node = this.top;
    let newTop = node.next;
    this.top = newTop;
    return node;
  }

  isEmpty() {
    return this.top ? false : true;
  }

  peek() {
    return this.top;
  }

  findMin() {
    let node = this.top;
    let min = node.data;
    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  sort() {
    let result = [];
    let node = this.top;
    while (node) {
      result.push(node.data);
      node = node.next;
    }
    result.sort().reverse();
    result.forEach((val) => {
      this.push(val);
    });
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
    let size = 0;
    let node = this.first;
    while (node) {
      size++;
      node = node.next;
    }
    this.size = size;
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
    this.count();
    this.findMax();
  }

  dequeue() {
    let removed = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }
    this.count();
    this.findMax();
    return removed.data;
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
    this.max = max;
    return this.max;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return !this.first;
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
