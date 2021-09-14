import { characterReplacement } from './longestRepeatingCharReplacement';

describe('finding the minimal length of a contiguous subarray', () => {
    it('should return 4 for input "ABAB and 2"',()=>{
        const inputString= "ABAB";
        const inputCount = 2;
        const output = 4;
        expect(characterReplacement(inputString, inputCount)).toBe(output);
    });
    it('should return 1 for input 4 and [1,4,4]',()=>{
        const inputString= "AABABBA";
        const inputCount = 1;
        const output = 4;
        expect(characterReplacement(inputString, inputCount)).toBe(output);
    });
});