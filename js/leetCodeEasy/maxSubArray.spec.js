import { maxSubArray } from "./maxSubArray";

describe('finding max sub array value', () => {
    it('should return correct value for long array of postivite and negitive numbers', () => {
        const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(maxSubArray(input)).toBe(6);
    })
    it('should return correct value for short array of positive numbers', () => {
        const input = [1, 2];
        expect(maxSubArray(input)).toBe(3);
    })
    it('should return correct value for two negitive numbers with smaller first', () => {
        const input = [-2, -1];
        expect(maxSubArray(input)).toBe(-1);
    })
    it('should return correct value for two negitive numbers with larger first', () => {
        const input = [-1, -2];
        expect(maxSubArray(input)).toBe(-1);
    })
})