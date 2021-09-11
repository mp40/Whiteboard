import { search } from './binarySearch';

describe('Binary Search', () => {
    it('should return index of low value target', () => {
        const array = [-1, 0, 3, 5, 9, 12];
        const target = 0;
        const output = 1;
        expect(search(array, target)).toBe(output)
    })
    it('should return index of high value target', () => {
        const array = [-1, 0, 3, 5, 9, 12];
        const target = 9;
        const output = 4;
        expect(search(array, target)).toBe(output)
    })
    it('should return -1 if target not in array', () => {
        const array = [-1, 0, 3, 5, 9, 12];
        const target = 2;
        const output = -1;
        expect(search(array, target)).toBe(output)
    })
    it('should find target in length 1 array', () => {
        const array = [5];
        const target = 5;
        const output = 0;
        expect(search(array, target)).toBe(output)
    })
    it('should find target in length 2 array', () => {
        const array = [2, 5];
        const target = 5;
        const output = 1;
        expect(search(array, target)).toBe(output)
    })
})