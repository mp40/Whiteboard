import { countPrimes } from './countPrimes';

describe('Counting Prime Numbers', () => {
    it('should return 0 from input 1', () => {
        const input = 1;
        const output = 0;
        expect(countPrimes(input)).toBe(output);
    })
    it('should return 0 from input 2', () => {
        const input = 2;
        const output = 0;
        expect(countPrimes(input)).toBe(output);
    })
    it('should return 4 from input 10', () => {
        const input = 10;
        const output = 4;
        expect(countPrimes(input)).toBe(output);
    })
})