import { isUgly } from './uglyNumber';

describe('Ugly Number', () => {
    it('should return true for 6', () => {
        const input = 6;
        const output = true;
        expect(isUgly(input)).toBe(output);
    })
    it('should return true for 8', () => {
        const input = 8;
        const output = true;
        expect(isUgly(input)).toBe(output);
    })
    it('should return false for 14', () => {
        const input = 14;
        const output = false;
        expect(isUgly(input)).toBe(output);
    })
})