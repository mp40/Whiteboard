import { setZeroes } from './setZeros';

describe('setting n x m matrix zeros', () => {
    it('should pass the first example', () => {
        const input = [[1,1,1],[1,0,1],[1,1,1]];
        const output = [[1,0,1],[0,0,0],[1,0,1]];
        setZeroes(input)
        expect(input).toEqual(output)
    })
    it('should pass the second example', () => {
        const input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
        const output = [[0,0,0,0],[0,4,5,0],[0,3,1,0]];
        setZeroes(input)
        expect(input).toEqual(output)
    })
    it('should be correct for short single row matrix', () => {
        const input = [[1,0]];
        const output = [[0,0]];
        setZeroes(input)
        expect(input).toEqual(output)
    })
})
