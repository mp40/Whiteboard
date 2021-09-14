import { lengthOfLongestSubstring } from './longestSubstring';

describe('finding length of longest substring', () => {
    it('should return 0 for input ""',()=>{
        const input = "";
        const output = 0;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });
    it('should return 1 for input "a"',()=>{
        const input = "a";
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });
    it('should return 3 for input "abcabcbb"',()=>{
        const input = "abcabcbb";
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });
    it('should return 1 for input "bbbbb"',()=>{
        const input = "bbbbb";
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 3 for input "pwwkew"',()=>{
        const input = "pwwkew";
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 2 for input "aab"',()=>{
        const input = "aab";
        const output = 2;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 2 for input "abb"',()=>{
        const input = "abb";
        const output = 2;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 1 for input "bb"',()=>{
        const input = "bb";
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
    it('should return 1 for input "dvdf"',()=>{
        const input = "dvdf";
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    })
})