const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// class constructor for Node
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

// class constructor for Stack
class Stack {
  constructor(top = null){
    this.top = top
  }

  // push adds an item to the stack
  push(data){
    const newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }

  // size returns the number of items in the stack
  size(){
    let current = this.top
    let size = 0
    while (current){
      size++
      current = current.next 
    }
    return size
  }

  // pop removes from the top of the stack
  pop(){
    let item = this.top
    let newTop = item.next
    this.top = newTop
    return item
  }

  // isEmpty checks if the stack is empty and returns a boolean
  isEmpty(){
    return this.top ? false : true
  }

  // peek returns the top item
  peek(){
    return this.top
  }

  // findMin returns the smallest value
  findMin(){
    let current = this.top
    let min = current.data
    while(current){
      if(current.data < min){
        min = current.data
      }
      current = current.next
    }
    return min
  }

  // sort method sorts the stack in ascending order with the smallest value first
  sort(){
    let arr = []

    // start from this.top
    let current = this.top
    
    // loop through stack and push values to array
    while(current){
      arr.push(current.data)
      current = current.next
    }
    
    // sort array
    arr.sort().reverse()

    // push values onto stsck in sorted order
    arr.forEach((val) =>   {
      this.push(val)
    })

    // while(current){
    //   let next = current.next
    //   if(current.data > next.data){
    //     current.next = current
    //     current = next
    //   }
    // }
  }
}

// class constructor for Queue
class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
    this.max = null
  }

  // count takes in a count of items in the queue
  count(){
    // start at first item and counting from 0
    let size = 0
    let current = this.first
    
    // loop through queue incrementing size for each iteration
    while(current){
      size++
      current = current.next
    }
    // update this.size and return the count
    this.size = size
    return this.size
  }

  // enqueue adds an item to the queue
  enqueue(data){
    // create a new Node
    const newItem = new Node(data)

    // if this.first does not exist, add newItem to the queue as the first and last item
    if(!this.first){
      this.first = newItem
      this.last = newItem
    // otherwise the previous this.last points to the newItem and newItem is now this.last
    } else {
      this.last.next = newItem
      this.last = newItem
    }
    // update size and max
    this.count()
    this.findMax()
  }

  // dequeue removes this first item from the queue
  dequeue(){
    // store data from this.first
    let removed = this.first

    // if there is none or only one item in the queue, remove and return null for this.first and this.last
    if(this.first === this.last){
      this.first = null
      this.last = null
    // otherwise the previous this.first.next becomes the new this.first
    } else {
      this.first = removed.next
    }
    // update size and max
    this.count()
    this.findMax()
    // return removed data
    return removed.data
  }

  // findMax returns the maximum data value
  findMax(){
    // start from this.first and store the first item's data as the current max
    let current = this.first
    let max = current.data

    // while current exists, compare data values and update max if current value is greater than the current max
    while(current){
      if(current.data > max){
        max = current.data
      }
      current = current.next
    }
    this.max = max
    return this.max
  }
}


const queue = new Queue
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.dequeue()

// console.log(queue.dequeue())
// console.log(queue.count())
console.log(inspect(queue, {showHidden: true, depth: 4}))


module.exports = {
  Node,
  Queue,
  Stack,
};
