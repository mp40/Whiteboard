import { removeDuplicates } from './removeDuplicatesSortedArray';

describe('Remove Duplicates from Sorted Array algorithm', () => {
    // Example 1:
    it('should return correct result for Example 1', () => {
        const array = [1,1,2];
        expect(removeDuplicates(array)).toBe(2);
        expect(array.slice(0, 2)).toEqual([1,2]);
        /*
        Your function should return length = 2,
        with the first two elements of nums being 1 and 2 respectively.
        It doesn't matter what you leave beyond the returned length.
        */
    })
        // Example 2:
        it('should return correct result for Example 2', () => {
            const array = [0,0,1,1,1,2,2,3,3,4];
            expect(removeDuplicates(array)).toBe(5);
            expect(array.slice(0, 5)).toEqual([0,1,2,3,4]);
            /*
            Your function should return length = 5,
            with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
            It doesn't matter what you leave beyond the returned length.
            */
        })
})
