import {moveZeroes} from './moveZeros'

describe('moveZeros', () => {
    it('should work on the example', () => {
        const array = [0,1,0,3,12]
        moveZeroes(array);
        expect(array).toEqual([1,3,12,0,0])
    })
    it('should work on empty arrays', () => {
        const array = []
        moveZeroes(array);
        expect(array).toEqual([])
    })
    it('should work on length 1 array with value 1', () => {
        const array = [1]
        moveZeroes(array);
        expect(array).toEqual([1])
    })
    it('should work on length 1 array with value 0', () => {
        const array = [0]
        moveZeroes(array);
        expect(array).toEqual([0])
    })
    it('should work on length 2 array starting with 1 and ending with 0', () => {
        const array = [1,0]
        moveZeroes(array);
        expect(array).toEqual([1,0])
    })
    it('should work on length 2 array starting with 0 and ending with 1', () => {
        const array = [0,1]
        moveZeroes(array);
        expect(array).toEqual([1,0])
    })
})