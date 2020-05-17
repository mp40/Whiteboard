class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(node) {
        if(this.head === null) {
            this.head = new Node(node);
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next
            }

            current.next = new Node(node);
        }

        this.size++
    }

    insertAt(node, index) {
        if(index > 0 && index > this.size) {
            return false;
        }

        if(index === 0) {
            let temp = this.head;
            this.head = new Node(node);
            this.head.next = temp;
        } else {
            let current = this.head;
            let count = 1;

            while(count < index) {
                current = current.next;
                count++;
            }

            let temp = current.next;
            current.next = new Node(node);
            current.next.next = temp;
        }

        this.size++
    }

    removeFrom(index) {
        if(index > 0 && index > this.size) {
            return false;
        }

        let current = this.head;
        let prev = undefined;
        let count = 0;

        if(index === 0) {
            this.head = this.head.next
        } else {
            while(count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
        }

        this.size--;

        return current;
    }
}

export default LinkedList;