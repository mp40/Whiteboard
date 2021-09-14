import { minCostClimbingStairs } from './climbingStairsMinCost';

describe('finding the min cost of climbing stairs', () => {
    it('should be cost 10 for [10, 15]', () => {
        const input = [10, 15];
        const result = 10;
        expect(minCostClimbingStairs(input)).toBe(result);
    });
    it('should be cost 15 for [10, 15, 20]', () => {
        const input = [10, 15, 20];
        const result = 15;
        expect(minCostClimbingStairs(input)).toBe(result);
    });
    it('should be cost 15 for [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
        const input = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        const result = 6;
        expect(minCostClimbingStairs(input)).toBe(result);
    });
});