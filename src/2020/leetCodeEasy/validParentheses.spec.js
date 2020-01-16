import { isValid } from './validParentheses';

describe('Valid Parentheses', () => {
    it('should return true for empty strings', () => {
        const input = ""
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return correct answer for example 1', () => {
        const input = "()"
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return correct answer for example 2', () => {
        const input = "()[]{}"
        const output = true
        expect(isValid(input)).toBe(output)
    })
    it('should return correct answer for example 3', () => {
        const input = "(]"
        const output = false
        expect(isValid(input)).toBe(output)
    })
    it('should return correct answer for example 4', () => {
        const input = "([)]"
        const output = false
        expect(isValid(input)).toBe(output)
    })
    it('should return correct answer for example 5', () => {
        const input = "{[]}"
        const output = true
        expect(isValid(input)).toBe(output)
    })
})

