// Stack Implementation. 

//Functions: push, pop, peek, length

class Stack {

    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }

    length() {
        return this.stack.length
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.length() - 1];
    }
}

function isPalindrome(word) {
    const pila = new Stack();
    for (i in word) {
        pila.push(word[i]);
    }
    const reverse = () => {
        let result = '';
        while (!pila.isEmpty()) {
            result += pila.pop();
        }
        return result;
    }
    return word === reverse();
}

/* Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time. */

class StackWithMin extends Stack {
    minStack;
    constructor() {
        super();
        this.minStack = new Stack();
    }

    push(data) {
        if (this.min() >= data) {
            this.minStack.push(data);
        }
        super.push(data);
    }
    pop() {
        if (this.min() === super.peek()) {
            this.minStack.pop();
        }
        return super.pop();
    }
    min() {
        if (this.minStack.isEmpty()) return 10000;
        else return this.minStack.peek();
    }

}

let stack = new StackWithMin();
stack.push(2);
stack.push(5);
stack.push(1);
console.log(stack.min());
stack.pop();
console.log(stack.min());