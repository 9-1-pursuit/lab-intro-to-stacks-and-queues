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
    // let nextNode = node.next
    let minValue = node.data

      while(node !== null){
        if(node.data < minValue){
        minValue = node.data
        }
        node = node.next
      }
      return minValue
  }

  // sort(){
  //   let node = this.top
  //   // let nextNode = node.next
  //   // let minValue = node.data
  //   let maxValue = node.data

  //     while(node !== null){
  //       if(node.data > maxValue){
  //       maxValue = node.data
  //       }
  //       node = node.next
  //     }

  //     return maxValue
  // }




}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
