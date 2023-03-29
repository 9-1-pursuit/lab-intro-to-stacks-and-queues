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

  isEmpty() {
    return this.top === null;
  }

  pop() {
    let newItem = this.top;
    this.top = newItem.next;
    return newItem;
  }

  size() {
    let sum = 0;
    let node = this.top;
    while (node) {
      sum++;
      node = node.next;
    }
    return sum;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else {
      return this.top;
    }
  }

  findMin() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }

    let node = this.top;
    let min = node.data;

    while (node !== null) {
      if (node.data < min) {
        min = node.data;
      }
      node = node.next;
    }
    return min;
  }

  sort() {
    if (this.top === null) {
      return;
    }

    const stack2 = new Stack();
    let node2;

    while (!this.isEmpty()) {
      node2 = this.pop();

      while (!stack2.isEmpty() && stack2.peek().data > node2.data) {
        this.push(stack2.pop().data);
      }

      stack2.push(node2.data);
    }

    while (!stack2.isEmpty()) {
      this.push(stack2.pop().data);
    }
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
      throw new Error("The queue is empty");
    }

    let dequeuedItem = this.first;
    this.first = this.first.next;
    this.size--;

    if (this.size === 0) {
      this.last = null;
    }

    return dequeuedItem.data; // Return the data of the dequeued node
  }

  peek() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }

  count() {
    return this.size;
  }

  isEmpty() {
    return this.first === null;
  }

  getLast() {
    return this.last;
  }

  findMax() {
    if (this.first === null) {
      throw new Error("The queue is empty");
    }

    let node = this.first;
    let max = node.data;

    while (node !== null) {
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
