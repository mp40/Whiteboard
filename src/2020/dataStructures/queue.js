// queue - fixed length
// open at both ends - First In First Out

class Queue  {
    constructor(capacity){
        this.items = [];
        this.capacity =  capacity;
    }

    isEmpty() {
        return this.items.length ? false : true;
    }

    isFull() {
        return this.items.length === this.capacity;
    }

    enqueue(item) {
        if(this.isFull()) {
            return "Full";
        }

        this.items.unshift(item);

        return item;
    }

    dequeue() {
        return this.isEmpty() ? "Empty" : this.items.shift();
    }

    front() {
        return this.isEmpty() ? "Empty" : this.items[0];
    }
}

export default Queue;