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
    push(data){
        const newStack = new Node(data)
        newStack.next = this.top
        this.top = newStack
     }
    peek(){
        const val = this.isEmpty()
        return val ? "stack is empty" : this.top
     }
     isEmpty(){
        return !this.top
     }
     pop() {
        let current = this.top
        let next = null
        if(current){
            next = current.next
            this.top = next
            return current
        } 
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

 /* 
    Create a temporary stack say tmpStack.
While input stack is NOT empty do this: 
Pop an element from input stack call it temp
while temporary stack is NOT empty and top of temporary stack is greater than temp, 
pop from temporary stack and push it to the input stack
push temp in temporary stack
The sorted numbers are in tmpStack 
*/

// function sort(){
//     let thisStack = this.top
   
//     const newStack = new Stack()
//     while(!thisStack.isEmpty()){
//         const topThisStack = thisStack.pop()
//         while(!newStack.isEmpty() && newStack.peek() > topThisStack){
//             const topNewStack = newStack.pop()
//             thisStack.push(topNewStack)
//         }
//         newStack.push(topThisStack)
//     }
//     console.log(inspect(newStack,{ colors: true, depth: 12 }))
//     return newStack
// }
// function sort(top = this.top){
//     const newStack = new Stack()
//     let current = top
//     let previous = top
//     let next = null

//     while(current){
//         // previous = current
//         next = current.next
//         if(next && current.data > next.data){
            
//             console.log(current.data, next.data)
//             previous.next = next
//             next = next.next
//             current.next = next
//         }
//         else {
//             newStack.push(current.data)
//             console.log(previous, current)
//             current = next
            
//         }
//         // else{
//         //     console.log(current, previous)
//         //     newStack.push(current.data)
//         //     current = next
//         // }
//     }
    
//     console.log(newStack)
   
// }
//  function sort(top = this.top){
//     const newStack = new Stack()
//     // console.log(newStack)
//     let current = top
//     let next = top
//     let hold = top
//     let min = findMin()
    // find nodes where data equals the min

    // console.log(min)
    // while (next){
    //     next = current.next
    //     // console.log(current.data, next.data)
    //     if(next){
    //         if( current.data > next.data){
    //             hold.next= next
    //             next = next.next
    //             current.next = next
    //         }
    //         else {
    //             console.log("push",current.data)
    //             push(current.data, stack.top)
    //             current = next
    //         }
    //         // console.log(hold, current)
    //     }
    //     else {
    //        console.log(current, next, hold, stack)
    //     }
    // }

    // current.next = this.top
    // this.top = current
    // return !this.top.next ? this.top : sort(this.top.next, stack)

//  }

/*  function sort(){
    const newStack = new Stack()
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
 } */

//  function sort() {
//     let thisStack = this.top
//     // console.log(this.isEmpty())
//     let newStack = new Stack()
//     // console.log(newStack.push(2))
//     // console.log(newStack.peek())
//     // console.log(newStack.isEmpty())
//     // console.log(newStack.pop())
//     while(!this.isEmpty()){
//         let removeTop = this.pop()
//         // console.log("remove",removeTop.data)
//         if(newStack.isEmpty()){
//             newStack.push(removeTop.data)
//         }
//         else {
//             let topNewStack = newStack.peek()
//             // console.log("top new",topNewStack.data ,"top this",removeTop.data)
//             if(topNewStack.data < removeTop.data){
//                 while(topNewStack.data < removeTop.data){
//                     newStack.push(removeTop.data)
//                 topNewStack = newStack.peek()
//                 // removeTop= this.pop()

//                 console.log(topNewStack,removeTop)
//                 }

//             }
//             else {
//                     if(topNewStack.data > removeTop.data){
//                         while(topNewStack.data > removeTop.data){
//                         // console.log("topNewStack.data", topNewStack.data, removeTop.data)
//                         this.push(topNewStack.data)
//                         removeTop = this.pop()
//                         newStack.pop()
//                         topNewStack = newStack.peek()
//                         // console.log(this.top, newStack.peek())
//                     }
                  
//                 }
//             }
         
//         }
//     }
//     console.log("newStack",inspect(newStack,{ colors: true, depth: 12 }))

// }

function sort(){
    const newStack = new Stack()
    const thisTop = this.pop()
    // new stack is empty add the top of this stack to get started
    newStack.push(thisTop.data)

    while(!this.isEmpty()){
        // will be passing nodes back and forth so while this stack isn't depleted, remove top node for comparison with newStack's top node
        let thisNextTop = this.pop()
        while(!newStack.isEmpty()){
            // newStack isn't empty will have initial popped value from this Stack, so if thisTop value is LESS than newStackTopValue pop of newStackValue and push back to this Stack,  and if this top value > newStack's top value stop the while loop and add to the top of newStack, 
            let newStackTop = newStack.peek()
            if(thisNextTop.data < newStackTop.data){
                let removeNewStackTop = newStack.pop()
                this.push(removeNewStackTop.data)
            }
            else {
                break;
            }
        }
        newStack.push(thisNextTop.data)
        // still in parent while loop 
        // console.log(newStack)
    }
    // once this stack is empty (parent while loop complete), unload 'descending' ordered nodes from newStack back into this stack -> pancake, so newstack top is ten = this Stack tail
    while(!newStack.isEmpty()){
        let newStackTop = newStack.pop()
        this.push(newStackTop.data)
    }
    // console.log(inspect(this.top,{ colors: true, depth: 12 }))
    return this.top
}




module.exports = {
    push,
    size, 
    pop,
    isEmpty,
    findMin,
    peek,
    sort,

}