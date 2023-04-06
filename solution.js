const { nums, words } = require("./data/data.js")
const { inspect } = require("util")

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class Stack {
  constructor(top = null) {
    this.top = top
  }

  push(data) {
    let newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }

  size() {
    let count = 0
    let curr = this.top
    while (curr) {
      count++
      curr = curr.next
    }
    return count
  }

  pop() {
    if (this.top === null) return new Error(" Stack is Empty")
    let item = this.top
    if (item) {
      let newItem = item.next
      this.top = newItem
      return item
    }
  }

  isEmpty() {
    return this.top === null
  }
  peek() {
    if (this.top == null) {
      return new Error(" Stack is Empty")
    }
    return this.top
  }

  findMin() {
    let curr = this.top
    let min = curr.data
    while (curr) {
      if (curr.data < min) {
        min = curr.data
      }
      curr = curr.next
    }
    return min
  }

  sort() {
    let curr = this.top
    while (cur) {
      sorted.push(cur.data)
      curr = curr.next
    }
    let sortedStack = new Stack()
    for (let i = 0; i < sorted.length; i++) {
      sortedStack.push(sorted[i])
    }
    return sortedStack
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
    this.maxValue = 0
  }

  enqueue(data) {
    let newNode = new Node(data)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return this.size++
  }
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty")
    }
    const newNode = this.first
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return newNode.data
  }

  count() {
    return this.size
  }

  isEmpty() {
    return this.first === null
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty")
    }
    return this.first
  }

  getLast() {
    return this.last
  }

  findMax() {
    let max = 0
    let cur = this.first
    while (cur.next != null) {
      if (cur.next.data > max) {
        max = cur.next.data
      }
      cur = cur.next
    }
    return max
  }
}
module.exports = {
  Node,
  Queue,
  Stack,
}
