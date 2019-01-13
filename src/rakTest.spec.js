const {solution, calcBinarian} = require("./rakTest")

describe('binarian problem',()=>{
    it('should claculate the binarian of an array',()=>{
        expect(calcBinarian([1,5,4])).toBe(50)
        expect(calcBinarian([1,0,2,0,0,2])).toBe(13)
    })
    it("should return length of shortest possible array with same binarian",()=>{
        expect(solution([1,0,2,0,0,2])).toBe(3)
    })
})