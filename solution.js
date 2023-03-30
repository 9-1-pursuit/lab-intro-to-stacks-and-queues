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
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    const popItem = this.top;
    this.top = this.top.next;
    return popItem;
  }
  isEmpty() {
    return !this.top;
  }
  findMin() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    const arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return Math.min(...arr);
  }
  peek() {
    if (this.top !== null) {
      return this.top;
    } else {
      throw new Error("The stack is empty");
    }
  }
  sort() {
    // working on non array method
      let current = this.top;
      const sorted = new Stack();
      while (current) {

        if (sorted.isEmpty()) {
          sorted.top = new Node(current.data);
        } else {
          let currentSorted = sorted.top;
          let added = false;
          while (currentSorted.next && !added) {
            console.log(currentSorted.data, current.data)
            if (currentSorted.data > current.data) {
              const newNext = currentSorted;
              currentSorted = new Node(current.data);
              console.log(newNext)
              currentSorted.next = newNext;
              added = true;
            }
            currentSorted = currentSorted.next;
          }
          if (!added) {
            currentSorted.next = new Node(current.data);
          }
        }
        current = current.next;
      }
      return sorted;
    }

    // method using an array
    // if (this.top === null) {
    //   throw new Error("The stack is empty");
    // }
    // const arr = [];
    // let current = this.top;
    // while (current) {
    //   arr.push(current.data);
    //   current = current.next;
    // }
    // arr.sort();
    // console.log(arr)
    // let sorted = new Stack()
    // for(let item of arr){
    //   sorted.push(item)
    // }
    // return sorted;
  // }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (this.size === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
    if (this.max < node.data) {
      this.max = node.data;
    }
  }
  dequeue() {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }
    const removed = this.first.data;
    this.first = this.first.next;
    this.size--;
    if (removed === this.max) {
      this.max = this.first.data;
      let current = this.first;
      while (current) {
        if (this.max < current.data) {
          this.max = current.data;
        }
        current = current.next;
      }
    }
    return removed;
  }
  count() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  getLast() {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }
    return this.last;
  }
  findMax() {
    if (this.size === 0) {
      throw new Error("The queue is empty");
    }
    return this.max;
  }
}

let wordStack2, numStack2;
wordStack2 = new Stack();
for (let word of words) {
  wordStack2.push(word);
}
numStack2 = new Stack();
for (let num of [10, 9, 8, 6, 7, 5, 4, 3]) {
  numStack2.push(num);
}

// console.log(wordStack2);
// console.log(numStack2);
// console.log(wordStack2.sort());

console.log(
  inspect(numStack2.sort(), { showHidden: true, colors: true, depth: 12 })
);
// console.log(numStack2.sort());

module.exports = {
  Node,
  Queue,
  Stack,
};
