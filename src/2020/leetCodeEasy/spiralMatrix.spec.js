import { spiralOrder  } from './spiralMatrix';

describe('finding spiral order of matrix', () => {
    it('should work on a short single row', () => {
        const input = [[1,2]]
        expect(spiralOrder(input)).toEqual([1,2])
    })
    it('should work on a short single col', () => {
        const input = [[1],[2]]
        expect(spiralOrder(input)).toEqual([1,2])
    })
    it('should work on length 3 col', () => {
        const input = [[7],[9],[6]];
        expect(spiralOrder(input)).toEqual([7,9,6])
    })
    it('should return correct answer for first example', () => {
        const input = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
        expect(spiralOrder(input)).toEqual([1,2,3,6,9,8,7,4,5])
    })
    it('should return correct answer for first example', () => {
        const input = [[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]
        expect(spiralOrder(input)).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])
    })
    it('should return empty array if argument is empty', () => {
        const input = [];
        expect(spiralOrder(input)).toEqual([])
    })
})