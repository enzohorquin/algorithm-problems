// Implement: insertAtFirst, insertAtEnd, insertAtIndex, deleteFirst, deleteLast, deleteAtIndex, get(i)
class LinkedList {
    head;
    #size;
    constructor() {
        this.head = null;
        this.#size = 0;
    }
    insertAtFirst(data) {
        let newNode = new Node(data, this.head);
        this.head = newNode;
        this.#size = this.#size + 1;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) this.head = newNode;
        else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = newNode;
        }
        this.#size = this.#size + 1;
    }

    insertRecursiveAtIndex(pointer, data, i, counter) {
        if (pointer.next === null) {
            let newNode = new Node(data);
            pointer.next = newNode;
        } else {
            if (counter === i - 1) {
                let newNode = new Node(data);
                newNode.next = pointer.next;
                pointer.next = newNode;
            } else this.insertRecursiveAtIndex(pointer.next, data, i, counter + 1)
        }
    }

    insertAtIndex(data, i) {
        let node = this.head;
        if (!this.head || i === 0) this.insertAtFirst(data);
        else
            this.insertRecursiveAtIndex(node, data, i, 0);
        this.#size = this.#size + 1;
    }


    deleteFirst() {
        if (this.head.next !== null)
            this.head = this.head.next;
        this.#size = this.#size - 1;
    }

    getSize() {
        return this.#size;
    }
    isEmpty() {
        return this.head === null;
    }

    deleteLastRecursive(pointer) {
        if (pointer.next.next !== null)
            this.deleteLastRecursive(pointer.next);
        else pointer.next = null;
    }

    deleteLast() {
        if (this.#size > 1)
            this.deleteLastRecursive(this.head);
        else
            this.head = null;
        this.#size = this.#size - 1;
    }

    deleteAtIndex(i) {
        if (i === 0) this.deleteFirst();
        else if (i === this.#size - 1) this.deleteLast();
        else this.deleteAtIndexRecursive(i, this.head, 0);
        this.#size = this.#size - 1;
    }

    deleteAtIndexRecursive(index, pointer, counter) {
        if (index - 1 === counter) {
            pointer.next = pointer.next.next;
        } else this.deleteAtIndexRecursive(index, pointer, counter + 1);
    }

    getRecursive(pointer, i, counter) {
        if (i === counter)
            return pointer;
        else if (pointer.next !== null)
            return this.getRecursive(pointer.next, i, counter + 1);
    }

    get(i) {
        if (i < this.#size - 1)
            return this.getRecursive(this.head, i, 0);
        else return null; //returns null in case that i > this.#size 
    }

}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


function print(pointer) {

    if (pointer) {
        console.log(pointer.data);
        print(pointer.next);
    }

}

const newList = new LinkedList();

newList.insertAtFirst(1);
newList.insertAtEnd(4);
newList.insertAtIndex(0, 5);
newList.insertAtEnd(5);

/* print(newList.head); */


/* Delete Middle Node: Implement an algorithm to delete a node in the middle (Le., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node.
    EXAMPLE
    Input: the node c from the linked list a - >b- >c - >d - >e- >f  */

function deleteMiddleNode(list) {
    let i = Math.floor(list.getSize() / 2); //
    let middleNode = list.get(i); //Access to middle Node.

    middleNode.data = middleNode.next.data;
    middleNode.next = middleNode.next.next;
}

/* deleteMiddleNode(newList); */
/* print(newList.head); */


/* Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).Thatis,617 + 295.
Output: 2 -> 1 -> 9. That is, 912. 
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.  
EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 -> 1 -> 2. That is, 912. */

function acc(pointer, reverse) {
    if (pointer.next === null)
        return `${pointer.data}`;
    else
        return reverse ? `${acc(pointer.next, reverse)}${pointer.data}` : `${pointer.data}${acc(pointer.next, reverse)}`;
};

function createListByNumber(number, pointer, reverse) {
    let i = reverse ? number.length - 1 : 0;
    while (reverse ? i >= 0 : i < number.length) {
        pointer.insertAtEnd(number[i]);
        i = reverse ? i - 1 : i + 1;
    }
}

function sumLists(firstList, secondList, reverse) {
    const firstNumber = acc(firstList, reverse);
    const secondNumber = acc(secondList, reverse);
    const sumNumber = (Number(firstNumber) + Number(secondNumber)).toString();
    const resultList = new LinkedList();
    createListByNumber(sumNumber, resultList, reverse);
    return resultList;
}
const result = sumLists(newList.head, newList.head, true);
print(result.head);


/* Palindrome: Implement a function to check if a linked list is a palindrome.  */