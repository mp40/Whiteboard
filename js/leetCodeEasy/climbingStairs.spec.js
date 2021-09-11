import { climbStairs } from './climbingStairs';

describe('climbing stairs', () => {
    it('should pass the first example', () => {
        const input = 2;
        const output = 2;
        expect(climbStairs(input)).toBe(output);
    })
    it('should pass the second example', () => {
        const input = 3;
        const output = 3;
        expect(climbStairs(input)).toBe(output);
    })
    it('should return 8 combos from 5 steps', () => {
        const input = 5;
        const output = 8;
        expect(climbStairs(input)).toBe(output);
    })
    it('should return combos for large even numbers', () => {
        const input = 42;
        const output = 433494437;
        expect(climbStairs(input)).toBe(output);
    })
    it('should return combos for large odd numbers', () => {
        const input = 45;
        const output = 1836311903;
        expect(climbStairs(input)).toBe(output);
    })
})