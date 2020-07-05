import { romanToInt,  findInt } from './romanToInteger';

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

describe('finding correct number value for roman character', () => {
    it('should return 1 for I', () => {
        const input = "I";
        const output = 1;
        expect(findInt(input)).toBe(output)
    })
    it('should return 5 for V', () => {
        const input = "V";
        const output = 5;
        expect(findInt(input)).toBe(output)
    })
    it('should return 10 for X', () => {
        const input = "X";
        const output = 10;
        expect(findInt(input)).toBe(output)
    })
    it('should return 50 for L', () => {
        const input = "L";
        const output = 50;
        expect(findInt(input)).toBe(output)
    })
    it('should return 100 for C', () => {
        const input = "C";
        const output = 100;
        expect(findInt(input)).toBe(output)
    })
    it('should return 500 for D', () => {
        const input = "D";
        const output = 500;
        expect(findInt(input)).toBe(output)
    })
    it('should return 1000 for M', () => {
        const input = "M";
        const output = 1000;
        expect(findInt(input)).toBe(output)
    })
})