import Queue from './queue';

describe('the Queue data structure', () => {
    let queue = undefined;

    beforeEach(()=> {
        queue = new Queue(3);
    })

    it('should construct the Queue with a defined capacity', () => {
        expect(queue.items).toEqual([]);
        expect(queue.capacity).toBe(3);
    })

    it('should have an isEmpty method that returns true if Queue is empty', () => {
        expect(queue.isEmpty()).toBe(true)
    })

    it('should have isEmpty return false if Queue not empty', () => {
        queue.items.push(2);
        expect(queue.isEmpty()).toBe(false);
    })

    it('should have an isFull method returning true when Queue is at capacity', ()=> {
        queue.items.push(1);
        queue.items.push(2);
        queue.items.push(3);
        expect(queue.isFull()).toBe(true);
    })

    it('should have isFull return false when Queue not at capacity', () => {
        expect(queue.isFull()).toBe(false);
    })

    describe('the Queue enqueue method', () => {

        it('should insert the element at the end of the Queue', () => {
            queue.enqueue(2);
            queue.enqueue(1);
            expect(queue.items[0]).toBe(2);
            expect(queue.items[1]).toBe(1);
        })

        it('should return full is Queue is already full', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);
            expect(queue.enqueue(1337)).toBe("Full");
        })

        it('should return the element enqueued', () => {
            expect(queue.enqueue(1337)).toBe(1337);
        })
    })

    describe('the Queue dequeue method', () => {

        it('should remove the element at the start of the queue', () => {
            queue.items = [1337, 6, 6];
            queue.dequeue();
            expect(queue.items).toEqual([6, 6]);
        })

        it('should return the element removed', () => {
            queue.items = [1337, 6, 6];
            expect(queue.dequeue()).toBe(1337);
        })

        it('should return "Empty" is Queue is already empty', () => {
            expect(queue.dequeue()).toBe("Empty");
        })
    })

    describe('the Queue front method', () => {

        it('should return the element at front of the queue', () => {
            queue.items = [1337, 6, 6];
            expect(queue.front()).toBe(1337);
        })

        it('should return "Empty" if the Queue is empty', () => {
            expect(queue.front()).toBe("Empty");
        })
    })
})