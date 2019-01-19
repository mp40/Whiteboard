const findFibonacci = require('./findFibonacci')

describe('find the nth fibonacci number',()=>{
    it('should find the correct number',()=>{
        expect(findFibonacci(4)).toBe(3)
        expect(findFibonacci(8)).toBe(21)
        expect(findFibonacci(11)).toBe(89)
    })
    it('should return 0 for input 0',()=>{
        expect(findFibonacci(0)).toBe(0)
    })
    it('should return 1 for input 1',()=>{
        expect(findFibonacci(1)).toBe(1)
    })
})