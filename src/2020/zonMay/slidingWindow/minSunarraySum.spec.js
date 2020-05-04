import { minSubArrayLen } from './minSubarraySum';

describe('finding the minimal length of a contiguous subarray', () => {
    it('should return 2 for input 7 and [2,3,1,2,4,3]',()=>{
        const inputSum = 7;
        const inputArray = [2,3,1,2,4,3];
        const output = 2;
        expect(minSubArrayLen(inputSum, inputArray)).toBe(output);
    });
    it('should return 1 for input 4 and [1,4,4]',()=>{
        const inputSum = 4;
        const inputArray = [1,4,4];
        const output = 1;
        expect(minSubArrayLen(inputSum, inputArray)).toBe(output);
    });
});