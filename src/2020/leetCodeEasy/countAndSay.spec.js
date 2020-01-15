import { countAndSay } from './countAndSay';

describe('Count And Say', () => {
    it('should pass base case', () => {
        const input = 1;
        expect(countAndSay(input)).toBe('1');
    })
    it('should return "11" when input is 2', () => {
        const input = 2;
        expect(countAndSay(input)).toBe('11');
    })
    it('should return "21" when input is 3', () => {
        const input = 3;
        expect(countAndSay(input)).toBe('21');
    })
    it('should pass the 2nd example', () => {
        const input = 4;
        expect(countAndSay(input)).toBe('1211');
    })
})