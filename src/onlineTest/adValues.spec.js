const compareVal = require('./adjValues')

describe('finding the distance between adjacent values',()=>{
    // it('should create an array mapping index values',()=>{
    //     expect(createDexArray(3)).toEqual([0,1,2])
    //     expect(createDexArray(8)).toEqual([0,1,2,3,4,5,6,7])
    // })
    // it('should compare a sorted array and return the difference in the index map',()=>{
    //     const arr = [0,5]
    //     const dex = [0,1]
    //     expect(compare(arr, dex)).toBe(1)
    //     const arr2 = [1,3,4,8]
    //     const dex2 = [3,1,2,0]
    //     expect(compare(arr2,dex2)).toBe(2)
    // })
    it('should return difference in index of adjacent values',()=>{
        const arr = [0,3,3,7,5,3,11,1]
        expect(compareVal(arr)).toBe(7)
    })
    it('should return -1 if no adjacent value is present',()=>{
        const arr = [1,1,1,1,1,1]
        expect(compareVal(arr)).toBe(-1)
    })
    it('should return distance of elements when there is no overlap',()=>{
        expect(compareVal([2,3,0])).toBe(2)
    })
    it('should return distance when elements far away and left larger',()=>{
        expect(compareVal([1,3,3,7,5,3,11,0])).toBe(7)
    })
    it('should return distance of elements in middle of array',()=>{
        expect(compareVal([1,1,8,3,9,4,1,1])).toBe(3)
    })
})