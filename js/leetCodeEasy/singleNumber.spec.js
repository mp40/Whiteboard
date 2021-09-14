import {singleNumber} from './singleNumber';

describe('finding the single number', () => {
    it('should return the single number in array of 3 numbers', () => {
        const input = [2,2,1];
        const output = 1;
        expect(singleNumber(input)).toBe(output);
    })
    it('should return the single number in array of 5 numbers', () => {
        const input = [4,1,2,1,2];
        const output = 4;
        expect(singleNumber(input)).toBe(output);
    })
})