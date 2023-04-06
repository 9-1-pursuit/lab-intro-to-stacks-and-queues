const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node{
  constructor(data){
  this.data = data
  this.next = null
  }
}
class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newDataItem = new Node(data);
    newDataItem.next = this.top;
    this.top = newDataItem;
  }
 
  peek(data) {
    return this.top;
  }


  size(){
    let dataNode = this.top
    let counter = 0
    while(dataNode !== null){
      dataNode = dataNode.next
      counter++
    }
    return counter
  }


  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

   isEmpty() {
    return this.top === null;
  }


  findMin(){
    let node = this.top
    let minValue = node.data

      while(node !== null){
        if(node.data < minValue){
        minValue = node.data
        }
        node = node.next
      }
      return minValue
  }

  sort(data){
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;  
    let newItem = item.next;
    let temp
    let newList = []
    while(item){
      if (item > item.next) {
        newList.push(item)
        // temp = item
        // item = newItem;
        // newItem = temp
      }
    }
    return ;
  }

  // sort(){
  //   let node = this.top
  //   let previousNode
    // let nextNode = node.next
    // let minValue = node.data
    // let minNode
    // let lastNode 


  //   while(node !== null){
  //     if(node.data < minValue){
  //     this.top = minValue 

  //     }
  //     previousNode = node
  //     node = node.next
  //   }
  //     this.top = 
  //     return minValue
  // }

}

class Queue {
  constructor(first, last, size) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
      
    }
    return ++this.size;
  }
    
  count(){
    return this.size
  }

  dequeue(data) {
    if (this.first == null) {
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


findMax(){
  let maxValue = this.last.data
  let node = this.first
  while(node){
   if(maxValue < node.data ){
   maxValue = node.data
    
   }
   node = node.next
  }
  return maxValue
}



getLast(){
  return this.last
}


isEmpty(){
  return this.first === null;

}

peek(){
  return this.first
}
  // max(){
  //   let node = this.first
  //   let nextNode = this.next
  //   let maxData

  //   while(node !== null){
  //    if(node.data > nextNode.data){
  //      maxData = node.data
  //    } else {
  //      maxData = nextNode.data
  //    }
  //    node = node.next
  //  }
  //  return maxData
  //  }
  }


module.exports = {
  Node,
  Queue,
  Stack,
};
