import { intToRoman } from './integerToRoman';

describe('Integer to Roman', () => {
    it('should convert 3 to III', () => {
        const input = 3;
        const output = "III";
        expect(intToRoman(input)).toBe(output);
    })
    it('should convert 4 to IV', () => {
        const input = 4;
        const output = "IV";
        expect(intToRoman(input)).toBe(output);
    })
    it('should convert 9 to IX', () => {
        const input = 9;
        const output = "IX";
        expect(intToRoman(input)).toBe(output);
    })
    it('should convert 58 to LVIII', () => {
        const input = 58;
        const output = "LVIII";
        expect(intToRoman(input)).toBe(output);
    })
    it('should convert 1994 to MCMXCIV', () => {
        const input = 1994;
        const output = "MCMXCIV";
        expect(intToRoman(input)).toBe(output);
    })
})