const { inspect } = require("util");

class Node {
    constructor(data, next = null){
      this.data= data
      this.next = next
    }
  }

  class Queue {
    constructor(first = null, last = null, max = null){
      this.first = first
      this.last = last
      this.size = count()
      this.max = max
    }
  }

  function count(){
    let current = this.first
    let count = 0
    while(current){
        count++
        current = current.next
    }
    return count
  }

  function enqueue(data){
    const newNode = new Node(data)
    !this.first ?
    this.first = newNode :
    this.last.next = newNode

    this.last = newNode
    this.size ++
  }



module.exports = {
    count,
    // dequeue,
    enqueue,
    // findMax,
    // getLast,
    // isEmptyQueue : isEmpty,
    // peekQueue: peek,
}