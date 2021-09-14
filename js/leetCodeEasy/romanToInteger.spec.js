import { romanToInt } from './romanToInteger';

describe("converting a roman number to integer", () => {
    it('should return correct answer for simple numbers', () => {
        const input = "III";
        const output = 3
        expect(romanToInt(input)).toBe(output);
    })
    it('should return correct answer for simple one before numbers', () => {
        const input = "IV";
        const output = 4
        expect(romanToInt(input)).toBe(output);
    })
    it('should return correct answer for one before numbers', () => {
        const input = "IX";
        const output = 9
        expect(romanToInt(input)).toBe(output);
    })
    it('should return correct answer for large numbers', () => {
        const input = "LVIII";
        const output = 58
        expect(romanToInt(input)).toBe(output);
    })
    it('should return correct answer for large numbers using x before', () => {
        const input = "MCMXCIV";
        const output = 1994
        expect(romanToInt(input)).toBe(output);
    })
})
