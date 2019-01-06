const findDuplicate = require('./containsDuplicate')

describe('find duplicate numbers in array',()=>{
    it('should return true if there is a duplicate number in array',()=>{
        expect(findDuplicate([1,2,3,2])).toEqual(true)
        expect(findDuplicate([1,2,3,4,5,6,3])).toEqual(true)
    })
    it('should return false if there no duplicate',()=>{
        expect(findDuplicate([1,2,3,4])).toEqual(false)
    })
})