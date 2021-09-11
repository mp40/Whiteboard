import { longestCommonPrefix } from './longestCommonPrefix';

describe('finding longest common prefix', () => {
    it('should return "fl" for ["flower","flow","flight"]', () => {
        const input = ["flower", "flow", "flight"];
        const result = "fl";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "" for ["dog","racecar","car"]', () => {
        const input = ["dog", "racecar", "car"];
        const result = "";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "a" for ["a"]', () => {
        const input = ["a"];
        const result = "a";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "" for ["", ""]', () => {
        const input = ["", ""];
        const result = "";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "c" for ["c", "c"]', () => {
        const input = ["c", "c"];
        const result = "c";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "" for ["a", "b"]', () => {
        const input = ["a", "b"];
        const result = "";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "aa" for ["aaa", "aa", "aaa"]', () => {
        const input = ["aaa", "aa", "aaa"];
        const result = "aa";
        expect(longestCommonPrefix(input)).toBe(result);
    });
    it('should return "" for an empty array', () => {
        const input = [];
        const result = "";
        expect(longestCommonPrefix(input)).toBe(result);
    });
})