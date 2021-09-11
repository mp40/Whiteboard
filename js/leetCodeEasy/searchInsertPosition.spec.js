import { searchInsert } from './searchInsertPosition';

describe('search insert position', () => {
    it('should return index of target value', () => {
        const nums = [1, 3, 5, 6];
        const target = 5;
        const output = 2;
        expect(searchInsert(nums, target)).toBe(output);
    })
    it('should return index of target value in length 1 array', () => {
        const nums = [1];
        const target = 1;
        const output = 0;
        expect(searchInsert(nums, target)).toBe(output);
    })
    it('should return index of target value in length 2 array', () => {
        const nums = [1, 3];
        const target = 2;
        const output = 1;
        expect(searchInsert(nums, target)).toBe(output);
    })
    it('should return index of position of missing target value', () => {
        const nums = [1, 3, 5, 6];
        const target = 2;
        const output = 1;
        expect(searchInsert(nums, target)).toBe(output);
    })
    it('should return index of position of missing target value located at end of array', () => {
        const nums = [1, 3, 5, 6];
        const target = 7;
        const output = 4;
        expect(searchInsert(nums, target)).toBe(output);
    })
    it('should return index of position of missing target value located at beginning of array', () => {
        const nums = [1, 3, 5, 6];
        const target = 0;
        const output = 0;
        expect(searchInsert(nums, target)).toBe(output);
    })
})