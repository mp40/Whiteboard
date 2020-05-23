import LinkedList from './linkedList';

describe('the Linked List data structure', () => {
    let linkedList = undefined;

    beforeEach(()=> {
        linkedList = new LinkedList()
    })

    it('should be constructed with a size value of 0', () => {
        expect(linkedList.size).toBe(0);
    })
    it('should be constructed with a head value of null', () => {
        expect(linkedList.head).toBe(null);
    })

    describe('the add method', () => {
        it('should add new node as head if list empty', () => {
            linkedList.add('head');
            expect(linkedList.head).toEqual({data: 'head', next: null});
        })
        it('should add new node to end if list not empty', () => {
            linkedList.add('head');
            linkedList.add('next');
            linkedList.add('last');
            expect(linkedList.head.next.next).toEqual({data: 'last', next: null});
        })
        it('should increment the size value by one when new node added', () => {
            linkedList.add('head');
            expect(linkedList.size).toBe(1);
            linkedList.add('next');
            expect(linkedList.size).toBe(2);
        })
    })

    describe('the insertAt method', () => {
        it('should insert new node at the specified index in the list', () => {
            linkedList.add('head');
            linkedList.add('next');
            linkedList.add('last');

            linkedList.insertAt('new', 1);

            expect(linkedList.head.next.data).toBe('new');
            expect(linkedList.head.next.next.data).toBe('next');
            expect(linkedList.head.next.next.next.data).toBe('last');
        })
        it('should insert as new head if index is 0', () => {
            linkedList.add('head');
            linkedList.add('last');

            linkedList.insertAt('new', 0);

            expect(linkedList.head.data).toBe('new');
            expect(linkedList.head.next.data).toBe('head');
            expect(linkedList.head.next.next.data).toBe('last');
        })
        it('should insert as new head in an empty list if index is 0 ', () => {
            linkedList.insertAt('head', 0);
            expect(linkedList.head).toEqual({data: 'head', next: null});
        })
        it('should insert at end of list if index is one more than current index', () => {
            linkedList.add('head');
            linkedList.insertAt('new', 1);
            expect(linkedList.head.next).toEqual({data: 'new', next: null});
        })
        it('should update the size value', () => {
            linkedList.insertAt('head', 0);
            expect(linkedList.size).toBe(1);
            linkedList.insertAt('next', 1);
            expect(linkedList.size).toBe(2);
        })
        it('should return false if index is greater than list size', () => {
            linkedList.add('head');
            linkedList.add('last');

            expect(linkedList.insertAt('new', 5)).toBe(false);
            expect(linkedList.size).toBe(2);
        })
    })

    describe('the removeFrom method', () => {
        beforeEach(() => {
            linkedList.add('head');
            linkedList.add('middle');
            linkedList.add('last');
        })

        it('should remove and return the node from the specified index', () => {
            expect(linkedList.removeFrom(1).data).toBe('middle');
            expect(linkedList.size).toBe(2);
            expect(linkedList.head.next.data).toEqual('last');
        })
        it('should remove and return the head when index is 0', () => {
            expect(linkedList.removeFrom(0).data).toBe('head');
            expect(linkedList.size).toBe(2);
            expect(linkedList.head.data).toEqual('middle');
            expect(linkedList.head.next.data).toEqual('last');
        })
        it('should return false if index is greater than list size', () => {
            expect(linkedList.removeFrom(5)).toBe(false);
            expect(linkedList.size).toBe(3);
        })
        it('should return last node if index is size - 1', () => {
            expect(linkedList.removeFrom(2).data).toBe('last');
            expect(linkedList.size).toBe(2);
        })
    })

    describe('the removeData method', () => {
        beforeEach(() => {
            linkedList.add('head');
            linkedList.add('middle');
            linkedList.add('last');
        })

        it('should remove and return the node with the specified data', () => {
            expect(linkedList.removeData('middle')).toBe('middle');
            expect(linkedList.size).toBe(2);
            expect(linkedList.head.next.data).toEqual('last');
        })

        it('should remove and return the head when data is at head', () => {
            expect(linkedList.removeData('head')).toBe('head');
            expect(linkedList.size).toBe(2);
            expect(linkedList.head.data).toEqual('middle');
            expect(linkedList.head.next.data).toEqual('last');
        })

        it('should return false if data not found', () => {
            expect(linkedList.removeData('Not In List')).toBe(false);
            expect(linkedList.size).toBe(3);
        })

        it('should return last node data if in last node', () => {
            expect(linkedList.removeData('last')).toBe('last');
            expect(linkedList.size).toBe(2);
        })
    })

    describe('the indexOf method', () => {
        beforeEach(() => {
            linkedList.add('head');
            linkedList.add('middle');
            linkedList.add('last');
        })

        it('should return 0 if given data at head', () => {
            expect(linkedList.indexOf('head')).toBe(0);
        })

        it('should return 1 if given data at index 1', () => {
            expect(linkedList.indexOf('middle')).toBe(1);
        })

        it('should return correct index value if given data at last index', () => {
            expect(linkedList.indexOf('last')).toBe(2);
        })

        it('should return false if data not found', () => {
            expect(linkedList.indexOf('Not In List')).toBe(false);
        })
    })
})