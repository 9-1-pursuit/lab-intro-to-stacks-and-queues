const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
const {
  push,
  size, 
  pop,
  isEmpty,
  findMin,
  peek,
  sort
} = require("./Stack-Functions.js")
const {
  count,
  dequeue,
  enqueue,
  findMax,
  getLast,
  isEmptyQueue,
  peekQueue,
} = require("./Queue-Functions.js");

class Node {
  constructor(data, next = null){
    this.data= data
    this.next = next
  }
}

class Stack {
  constructor(top = null){
    this.top = top
    this.push = push
    this.size = size
    this.pop = pop
    this.isEmpty = isEmpty
    this.findMin = findMin
    this.peek = peek
    this.sort = sort
  }
}

class Queue {
  constructor(first = null, last = null){
    this.first = first
    this.last = last
    this.count = count
    this.size = this.count()
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.findMax = findMax
    this.getLast = getLast
    this.isEmpty = isEmptyQueue
    this.peek = peekQueue
  }
}



wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}
numStack = new Stack();
for (let num of nums) {
  numStack.push(num);
}
// numStack.sort()
// console.log(inspect(numStack,{ colors: true, depth: 12 }))

module.exports = {
  Node,
  Queue,
  Stack,
};
