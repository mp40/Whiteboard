const {fibFrog, findJumps} = require('./fibFrog')

describe('the frog jumping to the other side of the river',()=>{
    it('should populate an array fibonacci numbers less than input array length',()=>{
        const arr = [0,0,0,1,1,0,1,0,0,0,0]
        const result = [1,1,2,3,5,8]
        expect(findJumps(arr.length)).toEqual(result) 
    })
    it("should return 1 if the parameter is less than two",()=>{
        const shortArr = [0]
        expect(findJumps(shortArr)).toBe(1)
    })
    it('should return the minimum number of jumps',()=>{
        const arr = [0,0,0,1,1,0,1,0,0,0,0]
        expect(fibFrog(arr)).toBe(3)
    })
})