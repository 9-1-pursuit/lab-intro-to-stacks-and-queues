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
    this.top = top; // head

  }
  push(data) {
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
   
  }
  size() {
    let count = 0;
    let node = this.top;
    while (node.next) {
      count++;
      node = node.next;
    }
    return count;
  }
  
}

class Queue {
  constructor(){}
}

module.exports = {
  Node,
  Queue,
  Stack,
};
