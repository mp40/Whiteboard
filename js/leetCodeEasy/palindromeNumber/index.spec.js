// import {isPalindrome} from './palindromeNumber';
import {isPalindrome} from './palindromeNumberPractice';

describe("determine if interger is palindrome", () => {
    it("should return true if valid palindrome", () => {
        const input = 121;
        const output = true;
        expect(isPalindrome(input)).toBe(output);
    })
    it("should return false if not valid palindrome", () => {
        const input = 10;
        const output = false;
        expect(isPalindrome(input)).toBe(output);
    })
    it("should return false if negative number", () => {
        const input = -121;
        const output = false;
        expect(isPalindrome(input)).toBe(output);
    })
})