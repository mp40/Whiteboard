import { maxArea } from './mostWater';

describe('container with most water', () => {
    it('should find the max size for length 2 arrays', () => {
        const input = [2,5];
        const output = 2;
        expect(maxArea(input)).toBe(output);
    })
    it('should find the max size for long arrays with wide containers', () => {
        const input = [1,8,6,2,5,4,8,3,7];
        const output = 49;
        expect(maxArea(input)).toBe(output);
    })
})