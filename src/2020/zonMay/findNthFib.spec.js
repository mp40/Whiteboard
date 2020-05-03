import { fib } from './findNthFib';

/*
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/

describe('find the nth number in fib sequence', () => {
    it('should value 0 for 0th position in sequence', () => {
        const input = 2;
        const result = 1;
        expect(fib(input)).toBe(result);
    });
    it('should value 1 for 1st position in sequence', () => {
        const input = 2;
        const result = 1;
        expect(fib(input)).toBe(result);
    });
    it('should value 1 for 2nd position in sequence', () => {
        const input = 2;
        const result = 1;
        expect(fib(input)).toBe(result);
    });
    it('should value 2 for 3rd position in sequence', () => {
        const input = 3;
        const result = 2;
        expect(fib(input)).toBe(result);
    });
    it('should value 3 for 4th position in sequence', () => {
        const input = 4;
        const result = 3;
        expect(fib(input)).toBe(result);
    });
    it('should value 6765 for 20th position in sequence', () => {
        const input = 20;
        const result = 6765;
        expect(fib(input)).toBe(result);
    });
})