import { missingNumber } from './missingNumber';

describe('find missing number', () => {
    it('should work for short arrays', () => {
        const input = [3,0,1];
        expect(missingNumber(input)).toBe(2)
    })
    it('should work for longer arrays', () => {
        const input = [9,6,4,2,3,5,7,0,1];
        expect(missingNumber(input)).toBe(8)
    })
    it('should work on very long arrays', () => {
        const input = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
        expect(missingNumber(input)).toBe(18)
    })
    it('should work when the last number is missing', () => {
        const input = [0];
        expect(missingNumber(input)).toBe(1)
    })
    it('should work when the first number is missing', () => {
        const input = [1];
        expect(missingNumber(input)).toBe(0)
    })
    it('should work when array is empty', () => {
        const input = [];
        expect(missingNumber(input)).toBe(0)
    })
})
