import { threeSum } from './threeSum';

describe('Three Sum', () => {
    it('should pass the example', () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const result = threeSum(input);
        expect(result.length).toBe(2)
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining([-1, 0, 1])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining([-1, -1, 2])]));
    })
    it('should work on longer sequences', () => {
        const input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
        const output = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
        const result = threeSum(input);
        expect(result.length).toBe(6)
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[0])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[1])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[2])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[3])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[4])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[5])]));
    })
})