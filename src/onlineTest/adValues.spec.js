const {adjValues,createDexArray, compare} = require('./adjValues')

describe('finding the distance between adjacent values',()=>{
    it('should create an array mapping index values',()=>{
        expect(createDexArray(3)).toEqual([0,1,2])
        expect(createDexArray(8)).toEqual([0,1,2,3,4,5,6,7])
    })
    it('should compare a sorted array and return the difference in the index map',()=>{
        const arr = [0,5]
        const dex = [0,1]
        expect(compare(arr, dex)).toBe(1)
        const arr2 = [1,3,4,8]
        const dex2 = [3,1,2,0]
        expect(compare(arr2,dex2)).toBe(2)
    })
    it('should return difference in index of adjacent values',()=>{
        const arr = [0,3,3,7,5,3,11,1]
        expect(adjValues(arr)).toBe(7)
    })
})