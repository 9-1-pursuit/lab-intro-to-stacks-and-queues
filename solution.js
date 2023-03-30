const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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
    //if the queue is empty the new item is the first and last item
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      //have to set the pointer to the previous item to be the last item we are adding
      this.last.next = newItem;
      //then add the new atem in the last position
      this.last = newItem;
    }
    // add the 1 first then return otherwise it would be off by one because it would return before it updates and you wouldnt see the current size
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
  isEmpty() {
    return !this.first;
  }
  peek() {
    return this.first;
  }
  getLast() {
    return this.last;
  }
  count() {
    return this.size;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
    this.sizer = 0;
  }
  size() {
    return this.sizer;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top;
  }
  push(word) {
    //create new instance of Node class using data passed in
    const newItem = new Node(word);
    //sets the next to null in this case -- newItem.next will be the previous top
    newItem.next = this.top;
    // new top will ne the newItem node we created
    this.top = newItem;
    this.sizer++;
  }
  pop() {
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      this.sizer--;
      //return the popped off item

      return item;
    }
  }
}

const wordStack = new Stack();
for (let i = 0; i < words.length; i++) {
  wordStack.push(words[i]);
}

const wordQueue = new Queue();

module.exports = {
  Node,
  Queue,
  Stack,
};
