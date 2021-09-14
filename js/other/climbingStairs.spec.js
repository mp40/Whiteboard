import { climbStairs, climbStairsFib } from './climbingStairs';

describe('how may ways to climb stairs', () => {
    describe('dynamic solution', ()=>{
        it('should return 1 way for 1 step', () => {
            const input = 1;
            const result = 1;
            expect(climbStairs(input)).toBe(result);
        });
        it('should return 2 ways for 2 steps', () => {
            const input = 2;
            const result = 2;
            expect(climbStairs(input)).toBe(result);
        });
        it('should return 3 ways for 3 steps', () => {
            const input = 3;
            const result = 3;
            expect(climbStairs(input)).toBe(result);
        });
        it('should return 5 ways for 4 steps', () => {
            const input = 4;
            const result = 5;
            expect(climbStairs(input)).toBe(result);
        });
    })
    describe('using fibonacci sequence', ()=>{
        it('should return 1 way for 1 step', () => {
            const input = 1;
            const result = 1;
            expect(climbStairsFib(input)).toBe(result);
        });
        it('should return 2 ways for 2 steps', () => {
            const input = 2;
            const result = 2;
            expect(climbStairsFib(input)).toBe(result);
        });
        it('should return 3 ways for 3 steps', () => {
            const input = 3;
            const result = 3;
            expect(climbStairsFib(input)).toBe(result);
        });
        it('should return 5 ways for 4 steps', () => {
            const input = 4;
            const result = 5;
            expect(climbStairsFib(input)).toBe(result);
        });
    })
});