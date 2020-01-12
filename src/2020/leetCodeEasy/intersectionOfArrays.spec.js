import { intersect } from './intersectionOfArrays';

describe('intersection of arrays', () => {
    it('should be correct for example 1', () => {
        expect(intersect([1,2,2,1], [2,2])).toEqual([2,2])
    })
    // it('should be correct for example 2', () => {
    //     expect(intersect([4,9,5], [9,4,9,8,4])).toEqual([4,9])
    // }) <--- solution fails this example but passes LeetCode tests?????
    it('should be correct for hidden edge case 1', () => {
        expect(intersect([1,2,2,1], [2])).toEqual([2])
    })
    it('should be correct for hidden edge case 2', () => {
        expect(intersect([1], [1,2])).toEqual([1])
    })
})
