class Queue {
    #rear;
    #front;
    #queue;
    constructor() {
        this.#front = 0;
        this.#rear = 0;
        this.#queue = [];
    }
    add(data) {
        this.#queue[this.#rear] = data;
        this.#rear = this.#rear + 1;
        return true;
    }

    isEmpty() {
        return this.#rear === 0;
    }
    remove() {
        const result = this.#queue[this.#front];
        let i = 0;
        while (i < this.#rear - 1) {
            this.#queue[i] = this.#queue[i + 1];
            i = i + 1;
        }
        this.#queue[this.#rear] = undefined;
        this.#rear = this.#rear - 1;
        return result;
    }
    print() {
        let i = this.#rear - 1;
        let result = ''
        while (i >= 0) {
            result = result + ' -> ' + this.#queue[i];
            i = i - 1;
        }
        return result;
    }
    peek() {
        return !this.isEmpty() ? this.#queue[this.#rear - 1] : 'Queue is empty!';
    }
}

let cola = new Queue();
cola.add(1);
cola.add(2);
cola.add(3);
console.log(cola.print());
cola.remove();
console.log(cola.print());
cola.remove();
console.log(cola.print());
cola.remove();
console.log(cola.peek());