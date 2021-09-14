import { lengthOfLongestSubstring } from './longestSubString';

describe('finding longest sub string', () => {
    it('should return correct result for first example', () => {
        const input = "abcabcbb"
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return correct result for second example', () => {
        const input = "bbbbb"
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return correct result for second example', () => {
        const input = "pwwkew"
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 2 for "aab"', () => {
        const input = "aab"
        const output = 2;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 3 for "dvdf"', () => {
        const input = "dvdf"
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 5 for "tmmzuxt"', () => {
        const input = "tmmzuxt"
        const output = 5;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 0 for empty string', () => {
        const input = ""
        const output = 0;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
})
