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
    this.size = 0;
  }
}
 

module.exports = {
  Node,
  Queue,
  Stack,
};
