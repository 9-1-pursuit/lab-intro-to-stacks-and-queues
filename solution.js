const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null){
    this.data= data
    this.next = next
  }
}

class Stack {
  constructor(top = null){
    this.top = top
  }
}

class Queue {
  constructor(first = null, last = null){
    this.first = first
    this.last = last
    this.size = 0
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
