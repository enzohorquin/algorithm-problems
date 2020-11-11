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
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.length() - 1];
    }
    print() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
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

/* 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min
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

/* let stack = new StackWithMin();
stack.push(2);
stack.push(5);
stack.push(1);
console.log(stack.min());
stack.pop();
console.log(stack.min()); */


/* 3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
(that is, pop ( ) should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt (int index) which performs a pop operation on a specific sub-stack.  */

class StackOfPlates {

    #arrOfStacks;
    #currentStack;
    #maxPlates;

    constructor(maxPlates) {
        this.#currentStack = 0;
        this.#maxPlates = maxPlates;
        const newStack = new Stack();
        this.#arrOfStacks = [];
        this.#arrOfStacks[this.#currentStack] = newStack;
    }

    push(item) {
        const currentStack = this.#arrOfStacks[this.#currentStack];
        if (currentStack.length() < this.#maxPlates) {
            currentStack.push(item);
        } else {
            this.#currentStack = this.#currentStack + 1;
            const newStack = new Stack();
            this.#arrOfStacks[this.#currentStack] = newStack;
            newStack.push(item);
        }
    }

    pop() {
        const currentStack = this.#arrOfStacks[this.#currentStack];
        const item = currentStack.pop();
        if (currentStack.isEmpty()) {
            this.#currentStack = this.#currentStack - 1;
        }
        return item;
    }

    popAtIndex(index) {
        const stack = this.#arrOfStacks[index];
        if (stack) return stack.pop();
    }

}

/* const stackOfPlates = new StackOfPlates(2);

stackOfPlates.push(1);
stackOfPlates.push(2);
stackOfPlates.push(3);

console.log(stackOfPlates.pop());
console.log(stackOfPlates.pop());
console.log(stackOfPlates.pop()); */

/* 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.  */

class Queue {
    #stack1;
    #stack2;

    constructor() {
        this.#stack1 = new Stack();
        this.#stack2 = new Stack();
    }

    enqueu(item) {
        this.#stack1.push(item);
    }
    dequeu() {

        while (!this.#stack1.isEmpty()) {
            const item = this.#stack1.pop();
            this.#stack2.push(item);
        }
        let result = !this.#stack2.isEmpty() ? this.#stack2.pop() : undefined;

        while (!this.#stack2.isEmpty()) {
            const item = this.#stack2.pop();
            this.#stack1.push(item);
        }
        return result;
    }
}

/* const cola = new Queue();
cola.enqueu(1);
cola.enqueu(2);
cola.enqueu(3);
cola.enqueu(4);
console.log(cola.dequeu()); // 1
console.log(cola.dequeu()); // 2
console.log(cola.dequeu());// 3
console.log(cola.dequeu());// 4
console.log(cola.dequeu());// undefined  */

/* 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.  */

function sortStack(stack) {
    const tempStack = new Stack();
    while (!stack.isEmpty()) {
        const temp = stack.pop();
        while (!tempStack.isEmpty() && temp < tempStack.peek()) {
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) stack.push(tempStack.pop());

    return stack;
}

const stack = new Stack();
stack.push(8);
stack.push(10);
stack.push(5);
stack.push(1);

const sortedStack = sortStack(stack);
sortedStack.print();
