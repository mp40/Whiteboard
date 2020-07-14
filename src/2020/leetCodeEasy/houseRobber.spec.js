import { rob } from './houseRobber';

describe('house robber', () => {
    it('should pass the first example', () => {
        const input = [1, 2, 3, 1];
        const output = 4;
        expect(rob(input)).toBe(output);
    })
    it('should pass the second example', () => {
        const input = [2, 7, 9, 3, 1];
        const output = 12;
        expect(rob(input)).toBe(output);
    })
    it('should return 0 for an empty array', () => {
        const input = [];
        const output = 0;
        expect(rob(input)).toBe(output);
    })
})