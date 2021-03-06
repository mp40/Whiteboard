import { rotate } from './rotateArray';


describe('rotate an array', () => {
    // Example 1:
    it('should return correct result for Example 1', () => {
        const array = [1,2,3,4,5,6,7];
        const k = 3;
        rotate(array, k);
        expect(array).toEqual([5,6,7,1,2,3,4]);
        /*
        Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]
        */
    })
    // Example 2:
    it('should return correct result for Example 2', () => {
        const array = [-1,-100,3,99];
        const k = 2;
        rotate(array, k);
        expect(array).toEqual([3,99,-1,-100]);
        /*
        Explanation:
        rotate 1 steps to the right: [99,-1,-100,3]
        rotate 2 steps to the right: [3,99,-1,-100]
        */
    })
    it('should work with arrays of length 1', () => {
        const array = [-1];
        const k = 2;
        rotate(array, k);
        expect(array).toEqual([-1]);
    })
    it('should work when k is greater than length', () => {
        const array = [1,2];
        const k = 3;
        rotate(array, k);
        expect(array).toEqual([2,1]);
    })
})

