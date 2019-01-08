const solution = require('./frogRiverOne')

describe('calculate the amount of seconds until the frog can cross the river',()=>{
    it('should return the index position of the final leaf',()=>{
        expect(solution(5, [1,3,1,4,2,3,5,4])).toEqual(6)
    })
})