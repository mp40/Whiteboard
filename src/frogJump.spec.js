const solution = require('./frogJump')

describe('Frog Jump Problem',()=>{
    it('should return minimum number of jumps',()=>{
        expect(solution(10,85,30)).toEqual(3)
    })
})