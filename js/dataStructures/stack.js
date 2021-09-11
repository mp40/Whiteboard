// stack - fixed length;
// operations at one end, LIFO;

class Stack {
    constructor(capacity) {
        this.items = [];
        this.capacity = 3;
    }

    isEmpty() {
        return this.items.length ? false : true;
    }

    isFull() {
        return this.items.length === this.capacity ? true : false;
    }

    push(item) {
        if(this.isFull()) {
            return "Full";
        }

        this.items.push(item);

        return item;
    }

    pop() {
        return this.isEmpty() ? "Empty" : this.items.pop();
    }

    peek() {
        return this.isEmpty() ? "Empty" : this.items[this.items.length - 1];
    }
}

export default Stack;