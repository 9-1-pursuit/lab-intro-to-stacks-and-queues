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

 function push(data){
    const newStack = new Node(data)
    newStack.next = this.top
    this.top = newStack
 }

 function size(){
    let current = this.top
    let count = 0
    while(current){
        count++
        current = current.next
    }
    return count
 }

 function pop() {
    let current = this.top
    let next = current.next
    this.top = next
    return current
 }

 function isEmpty(){
    return !this.top
 }

 function findMin(){
    let min = 0
    let current = this.top
    while(current){
        if(current.data < min){
            min = current.data
        }
        current = current.next
    }
    return min
 }

 function peek(){
    const val = this.isEmpty()
    return val ? "stack is empty" : this.top
 }

 function sort(){
    let current = this.top
    let next= this.top
    while(current){
        if(current.next){
           next = current.next
            if(current.data > next.data){
                const small = next
                const big = current
                
                const following = small.next
                // console.log('followingNode', following)
                big.next = following
                next.next = big
                // console.log(inspect(this.top,{ colors: true, depth: 12 }))
                
            }
                current = next
        
        }
        else {
            if(next.data > current.data){
                current.next = next
                next.next = null
            }
            current = current.next 
        }
        // console.log(inspect(this.top,{ colors: true, depth: 12 }))
    }
 }




module.exports = {
    push,
    size, 
    pop,
    isEmpty,
    findMin,
    peek,
    sort
}