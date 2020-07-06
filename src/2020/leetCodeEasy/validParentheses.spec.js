import { isValid } from './validParentheses';

describe('Valid Parentheses', () => {
    it('should return true for empty strings', () => {
        const input = ""
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return true for "()"', () => {
        const input = "()"
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return true for "()[]{}"', () => {
        const input = "()[]{}"
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return false for "(]"', () => {
        const input = "(]"
        const output = false
        expect(isValid(input)).toBe(output)
    })
    it('should return false for "([)]"', () => {
        const input = "([)]"
        const output = false
        expect(isValid(input)).toBe(output)
    })
    it('should return true for "{[]}"', () => {
        const input = "{[]}"
        const output = true
        expect(isValid(input)).toBe(output)
    })
})

