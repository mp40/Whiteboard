const solution = require("./countingElements")

describe('counting elements to find missing value',()=>{
    it('should return 1 if all values exisit',()=>{
        expect(solution([4,1,3,2])).toEqual(1)
    })
    it('should return 0 if missing an element',()=>{
        expect(solution([4,1,3])).toEqual(0)
    })
})