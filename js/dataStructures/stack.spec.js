import Stack from './stack';

describe('the stack data structure',()=> {
    let stack = undefined;

    beforeEach(()=>{
        stack = new Stack()
    })

    it('should construct a stack with a defined capacity', ()=> {
        expect(stack.items).toEqual([]);
        expect(stack.capacity).toBe(3);
    })

    it('should have an isEmpty method that returns true if Stack is empty', () => {
        expect(stack.isEmpty()).toBe(true)
    })

    it('should have isEmpty return flase if Stack not empty', () => {
        stack.items.push(2);
        expect(stack.isEmpty()).toBe(false);
    })

    it('should have an isFull method returning true with Stack is at capacity', ()=> {
        stack.items.push(1);
        stack.items.push(2);
        stack.items.push(3);
        expect(stack.isFull()).toBe(true);
    })

    it('should have isFull return false when Stack not at capacity', () => {
        expect(stack.isFull()).toBe(false);
    })

    describe('the Stack should have a push method that adds items to then end of the stack', () => {

        it('should add new items to the top of the Stack', () => {
            stack.push(2);
            expect(stack.items[stack.items.length - 1]).toBe(2);
            stack.push(4);
            expect(stack.items[stack.items.length - 1]).toBe(4);
        })

        it('should return "Full" if stack already at capacity', () => {
            stack.items.push(1);
            stack.items.push(2);
            stack.items.push(3);
            expect(stack.push(4)).toBe("Full");
        })

        it('should return the value pushed into the Stack', () => {
            expect(stack.push(5)).toBe(5);
        })
    })

    describe('The Stack should have a pop method that removes that last element of the Stack', () => {

        it('should remove the last item from the Stack', () => {
            stack.items.push(1);
            stack.items.push(2);
            stack.items.push(3);
            stack.pop();
            expect(stack.items[stack.items.length - 1]).toBe(2);
        })

        it('should return the element removed', () => {
            stack.items.push(1337);
            expect(stack.pop()).toBe(1337);
        })

        it('should return "Empty" if Stack already empty', () => {
            expect(stack.pop()).toBe("Empty");
        })

        describe('the Stack peek method', () => {

            it('should return the last element in the stack', () => {
                stack.push(1337);
                expect(stack.peek()).toBe(1337);
                expect(stack.isEmpty()).toBe(false);
            })

            it('should return "Empty" if stack is empty', () => {
                expect(stack.peek()).toBe("Empty");
            })
        })
    })
})