import { threeSum } from './threeSum';

describe('Three Sum', () => {
    it('should pass the example', () => {
        const input = [-1, 0, 1, 2, -1, -4];
        const result = threeSum(input);
        expect(result.length).toBe(2)
        /*
        [-1, 0, 1],
        [-1, -1, 2]
        */
        expect(result).toEqual(expect.arrayContaining([-1, 0, 1]));
        // how to write test for this?
    })
    // it('should work on longer sequences', () => {
    //     const input = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
    //     const output = [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
    // })
})