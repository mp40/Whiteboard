import { plusOne } from './plusOne';

describe('Plus One', () => {
    it('should add one to zero', () => {
        const input = [0];
        const output = [1];
        expect(plusOne(input)).toBe(output);
    })
    it('should add one to single digit numbers', () => {
        const input = [9];
        const output = [10];
        expect(plusOne(input)).toBe(output);
    })
    it('should add one to two digit numbers', () => {
        const input = [10];
        const output = [11];
        expect(plusOne(input)).toBe(output);
    })
    it('should add one to three digit numbers', () => {
        const input = [1, 2, 3];
        const output = [1, 2, 4];
        expect(plusOne(input)).toBe(output);
    })
    it('should add one to four digit numbers', () => {
        const input = [4, 3, 2, 1];
        const output = [4, 3, 2, 2];
        expect(plusOne(input)).toBe(output);
    })
})