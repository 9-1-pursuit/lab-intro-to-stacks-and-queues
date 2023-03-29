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
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  pop() {
    const popItem = this.top;
    this.top = this.top.next;
    return popItem;
  }
  isEmpty() {
    return !this.top;
  }
  findMin() {
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return Math.min(...arr);
  }
  peek() {
    if(this.top){
      return this.top;
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
}

module.exports = {
  Node,
  Queue,
  Stack,
};
