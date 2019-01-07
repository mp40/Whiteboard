const solution = require('./missingValue')

describe("Find missing value in array of intergers",()=>{
    it('should return the missing element',()=>{
        expect(solution([2,3,1,5])).toEqual(4)
    })
})