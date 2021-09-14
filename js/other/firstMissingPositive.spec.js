import { firstMissingPositive } from './firstMissingPositive';

describe('finding the smallest missing positive number', () => {
    it('should be 3 for [1,2,0]', () => {
        const input = [1, 2, 0];
        const result = 3;
        expect(firstMissingPositive(input)).toBe(result);
    });
    it('should be 2 for [3,0,1]', () => {
        const input = [3, 0, 1];
        const result = 2;
        expect(firstMissingPositive(input)).toBe(result);
    });
    it('should be 2 for [3,4,-1,1]', () => {
        const input = [3, 4, -1, 1];
        const result = 2;
        expect(firstMissingPositive(input)).toBe(result);
    });
    it('should be 1 for [7,8,9,11,12]', () => {
        const input = [7, 8, 9, 11, 12];
        const result = 1;
        expect(firstMissingPositive(input)).toBe(result);
    });
    it('should be 2 for [1]', () => {
        const input = [1];
        const result = 2;
        expect(firstMissingPositive(input)).toBe(result);
    });
    it('should be 8 for [9,6,4,2,3,5,7,0,1]', () => {
        const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
        const result = 8;
        expect(firstMissingPositive(input)).toBe(result);
    });
});
