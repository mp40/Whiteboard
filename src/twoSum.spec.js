const twoSum = require('./twoSum')

describe("twoSum function",()=>{
    it('should return an array with two index references which add up to the target',()=>{
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1])
    })
})