const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor (top = null) {
    this.top = top
  }

  push(data) {
    let items = new Node(data);
    this.top = items;
    items.next = this.top;
  }

  pop() {
    if (this.top === null) {
      throw new Error("This stack is empty")
    }
    let items = this.top;
    if (items) {
      let newItem = items.next;
      this.top = newItem;
      return items;
    }
  }

  size() {
    let num = 0;
    let node = this.top;
    while (node) {
      num++;
      node = node.next;
    }
    return num;
  }

  isEmpty() {
    return this.top === null;
  }

  fingMin() {
    let node = this.top;
    let index = node.data;
    while (node) {
      if (node.data < index) {
        index = node.data;
      }
      node = node.next;
    }
    return index;
  }

  sort() {
    if (this.top === null) {
      return;
    }
    const newStack = new Stack();
    let index;
    while (!this.isEmpty()) {
      index = this.pop();
      while (!newStack.isEmpty() && newStack.peek().data > index.data) {
        this.push(newStack.pop().data);
      }
      newStack.push(index.data);
    }
    while (!newStack.isEmpty()) {
      this.push(newStack.pop().data);
    }
  }

  peek() {
    if (this.top === null) {
      throw new Error("This stack is empty");
    }
    return  this.top;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this.size++;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("This queue is empty");
    }
    let prevFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return prevFirst.data;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (this.first === null) {
      throw new Error("This queue is empty");
    }
    return this.first;
  }

  findMax() {
    let node = this.first;
    let data = node.data;
    while (node) {
      if (node.data > data) {
        data = node.data;
      }
      node = node.next;
    }
    return data;
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
