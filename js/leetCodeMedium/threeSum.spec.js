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
    it('should work on really long sequences', () => {
        const input = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]
        const output = [[-15,1,14],[-15,2,13],[-15,3,12],[-15,4,11],[-15,5,10],[-15,6,9],[-15,7,8],[-14,0,14],[-14,1,13],[-14,2,12],[-14,3,11],[-14,4,10],[-14,5,9],[-14,6,8],[-14,7,7],[-13,-1,14],[-13,0,13],[-13,1,12],[-13,2,11],[-13,3,10],[-13,4,9],[-13,5,8],[-13,6,7],[-12,-2,14],[-12,-1,13],[-12,0,12],[-12,1,11],[-12,2,10],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],[-11,-1,12],[-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],[-10,-4,14],[-10,-3,13],[-10,-2,12],[-10,-1,11],[-10,0,10],[-10,1,9],[-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-9,-5,14],[-9,-4,13],[-9,-3,12],[-9,-2,11],[-9,-1,10],[-9,0,9],[-9,1,8],[-9,2,7],[-9,3,6],[-9,4,5],[-8,-6,14],[-8,-5,13],[-8,-4,12],[-8,-3,11],[-8,-2,10],[-8,-1,9],[-8,0,8],[-8,1,7],[-8,2,6],[-8,3,5],[-8,4,4],[-7,-7,14],[-7,-6,13],[-7,-5,12],[-7,-4,11],[-7,-3,10],[-7,-2,9],[-7,-1,8],[-7,0,7],[-7,1,6],[-7,2,5],[-7,3,4],[-6,-6,12],[-6,-5,11],[-6,-4,10],[-6,-3,9],[-6,-2,8],[-6,-1,7],[-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],[-5,-4,9],[-5,-3,8],[-5,-2,7],[-5,-1,6],[-5,0,5],[-5,1,4],[-5,2,3],[-4,-4,8],[-4,-3,7],[-4,-2,6],[-4,-1,5],[-4,0,4],[-4,1,3],[-4,2,2],[-3,-3,6],[-3,-2,5],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]]
        const result = threeSum(input);
        expect(result.length).toBe(output.length)
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[0])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[1])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[2])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[3])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[4])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[5])]));
    })
})