import { isPalindrome } from './validPalindrome';

describe('checking  palindrome', () => {
    it('should be correct for first example', () => {
        const input = "A man, a plan, a canal: Panama"
        expect(isPalindrome(input)).toBe(true);
    })
    it('should be correct for second example', () => {
        const input = "race a car"
        expect(isPalindrome(input)).toBe(false);
    })
})