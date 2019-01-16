const {sumSquares, sumWithRecursion} = require('./hdeTest')

describe('summing squares from positive numbers',()=>{
    it('should square numbers and sum them',()=>{
        expect(sumSquares([2,3,4])).toBe(29)
    })
    it('should not calculate negatives',()=>{
        expect(sumSquares([2,-1])).toBe(4)
    })
    it('should...',()=>{
        expect(sumSquares([3,-1,1,14])).toBe(206)
    })
    it('should...',()=>{
        expect(sumSquares([9,6,-53,32,16])).toBe(1397)
    })
})

describe('summing squares without loops or native methods',()=>{
    it('should square numbers and sum them',()=>{
        expect(sumWithRecursion([2,3,4])).toBe(29)
    })
    it('should not calculate negatives',()=>{
        expect(sumSquares([2,-1])).toBe(4)
    })
    it('should...',()=>{
        expect(sumSquares([3,-1,1,14])).toBe(206)
    })
    it('should...',()=>{
        expect(sumSquares([9,6,-53,32,16])).toBe(1397)
    })
})