import { maxSubArray } from "./maxSubArray";

describe('finding max sub array value', () => {
    it('should return correct value for the example', () => {
        const input = [-2,1,-3,4,-1,2,1,-5,4];
        expect(maxSubArray(input)).toBe(6);
    })
})