import { intersect } from './intersectionOfArrays';

describe('intersection of arrays', () => {
    it('should be correct for long array compared to short array', () => {
        const input1 = [1,2,2,1]
        const input2 = [2,2]
        const output = [2,2]
        const result = intersect(input1, input2)
        expect(result).toEqual(expect.arrayContaining(output));
    })
    it('should be correct for short array compared to long array', () => {
        const input1 = [4,9,5]
        const input2 = [9,4,9,8,4]
        const output = [4,9]
        const result = intersect(input1, input2)
        expect(result).toEqual(expect.arrayContaining(output));
    })
    it('should be correct for long array compared to array of one number', () => {
        const input1 = [1,2,2,1]
        const input2 = [2]
        const output = [2]
        const result = intersect(input1, input2)
        expect(result).toEqual(expect.arrayContaining(output));
    })
    it('should be correct for array of one number compared to short array', () => {
        const input1 = [1]
        const input2 = [1,2]
        const output = [1]
        const result = intersect(input1, input2)
        expect(result).toEqual(expect.arrayContaining(output));
    })
})
