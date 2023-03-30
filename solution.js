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
    if (this.top == null) {
      throw new Error("this stack is empty!");
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
    let min = node.data;
    while (node) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  peek() {
    if (this.top == null) {
      return null;
    }
    return this.top;
  }

  sort() {
    const newStack = new Stack();
    let temp;

    while (!this.isEmpty()) {
      temp = this.pop();

      while (!newStack.isEmpty() && newStack.peek().data > temp.data) {
        this.push(newStack.pop().data);
      }

      newStack.push(temp.data);
    }

    while (!newStack.isEmpty()) {
      this.push(newStack.pop().data);
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

  count() {
    return this.size;
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

  findMax() {
    let node = this.first;
    let max = this.max;
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
