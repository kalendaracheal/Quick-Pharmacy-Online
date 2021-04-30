class Stack {

    constructor(){
        this.items = []
        this.count = 0
    }
    //add element to top of stack
    push(element){
        this.items[this.count] = element
        this.count += 1
        console.log("s{element} added to ${this.count")
        return this.count-1
    }
//removing the top element from the stack
    pop(){
        if(this.count == 0)
        return undefined
        let deleteItem = this.items[this.count-1]
        this.count-= 1
        console.log('${deleteItem} removed')
        return deleteItem
    }
// Checking for the top element in the stack
    peek() {
        console.log('Top element is $this.items[this.count-1]')
        return this.items[this.count-1]
            }

            // check if stack is empty
            isEmpty(){
                console.log(this.count == 0 ? 'stack is empty' :'stack is not empty')
                return this.count ==0
            }
           // check size
           size(){
               console.log('{this.count} elements in the stack')
               return this.count
           }
           //print elements in the stack

           print(){
               let str = ''
               for(let i = 0; i< this.count; i++){
                   str += this.items + ' '
               }
               return str
           }
}

const stack = new Stack()

Stack.isEmpty()
Stack.push(100)
Stack.push(200)
Stack.push(300)
Stack.push(400)

Stack.size()
Stack.push(500)

console.log(Stack.print( ))
Stack.peek()

Stack.pop()
Stack.pop()
Stack.pop()
Stack.pop()
Stack.pop()

stack.isEmpty()
console.log('Stack.pop()')
