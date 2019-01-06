const {twoSum} = require('./twoSum')

describe("twoSum function",()=>{
    const testArray = [2,7,11,15]
    it('should return an array with two index references which add up to the target',()=>{
        expect(twoSum(testArray, 9)).toEqual([0,1])
        expect(twoSum(testArray, 18)).toEqual([1,2])
        expect(twoSum(testArray, 17)).toEqual([0,3])
    })
})