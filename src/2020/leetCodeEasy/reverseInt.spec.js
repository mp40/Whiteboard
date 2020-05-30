import { reverse } from './reverseInt';

describe('reversing an integer', () => {
    it('should reverse integer', () => {
        const input = 123;
        const output = 321;
        expect(reverse(input)).toBe(output);
    })
    it('should reverse integers eneding with 0', () => {
        const input = 120;
        const output = 21;
        expect(reverse(input)).toBe(output);
    })
    it('should reverse negative integers', () => {
        const input = -123;
        const output = -321;
        expect(reverse(input)).toBe(output);
    })
})