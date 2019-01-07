const solution = require('./oddArray')

describe('finding the solitary value',()=>{
    it('should return the value of the only solitary value',()=>{
        expect(solution([2,3,3,2,1])).toEqual(1)
        expect(solution([9,3,9,3,9,7,9])).toEqual(7)
    })
})