import { reverse } from './reverseInt';

describe('reversing an integer', () => {
    it('should reverse integer', () => {
        const input = 123;
        const output = 321;
        expect(reverse(input)).toBe(output);
    })
})