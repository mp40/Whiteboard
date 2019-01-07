const solution = require('./missingValue')

describe("Find missing value in array of intergers",()=>{
    it('should return the missing element',()=>{
        expect(solution([2,3,1,5])).toEqual(4)
    })
    it('should return 1 if 1 missing',()=>{
        expect(solution([2,3,4])).toEqual(1)
    })
    it('should return 1 if array is empty',()=>{
        expect(solution([])).toEqual(1)
    })
    it('should return N+1 if last value missing',()=>{
        expect(solution([1,2,3,4])).toEqual(5)
    })
})