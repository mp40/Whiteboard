import { longestPalindrome } from './longestPalindromicSubstring';

describe('finding longest palindromic substring', ()=>{
    it('should return "bb" from "cbbd"', () => {
        const input = "cbbd";
        const output = "bb"
        expect(longestPalindrome(input)).toBe(output);
    });
    it('should return "cbbc" from "cbbc"', () => {
        const input = "cbbc";
        const output = "cbbc"
        expect(longestPalindrome(input)).toBe(output);
    });
    it('should return "dbd" from "cdbd"', () => {
        const input = "cdbd";
        const output = "dbd"
        expect(longestPalindrome(input)).toBe(output);
    });
    it('should return "racecar" from "racecar"', () => {
        const input = "racecar";
        const output = "racecar"
        expect(longestPalindrome(input)).toBe(output);
    });
});