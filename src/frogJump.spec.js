const solution = require('./frogJump')

describe('Frog Jump Problem',()=>{
    it('should return minimum number of jumps',()=>{
        expect(solution(10,85,30)).toEqual(3)
    })
    it('should return 0 if X is same as Y',()=>{
        expect(solution(10,10,30)).toEqual(0)
    })
})