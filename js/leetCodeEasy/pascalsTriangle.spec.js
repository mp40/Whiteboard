import { generate } from './pascalsTriangle';

describe('generating pascals triangle', () => {
    it('should return correct answer for input 0', () => {
        const input = 0;
        const output = [];
        expect(generate(input)).toEqual(output)
    })
    it('should return correct answer for input 1', () => {
        const input = 1;
        const output = [[1]]
        expect(generate(input)).toEqual(output)
    })
    it('should return correct answer for input 2', () => {
        const input = 2;
        const output = [[1],[1,1]]
        expect(generate(input)).toEqual(output)
    })
    it('should return correct answer for input 3', () => {
        const input = 3;
        const output = [[1],[1,1],[1,2,1]]
        expect(generate(input)).toEqual(output)
    })
    it('should return correct answer for input 4', () => {
        const input = 4;
        const output = [[1],[1,1],[1,2,1],[1,3,3,1]]
        expect(generate(input)).toEqual(output)
    })
    it('should return correct answer for input 5', () => {
        const input = 5;
        const output = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
        expect(generate(input)).toEqual(output)
    })
})

