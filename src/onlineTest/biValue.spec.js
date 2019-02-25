/*
An array consisting of N integers is given
A bi-valued slice of this array is consisting 
of at most 2 different numbers
Return the size of the largest bi-valued slice
ex: [5, 4, 4, 5, 0, 12]  => 4 (since the slice from index 0 to 3 is bi-valued)
*/

const biValue = require('./biValue')

describe.only('finding largest b-value slice in an array',()=>{
    it('should return the longest slice length',()=>{
        expect(biValue([5,4,4,5,0,12])).toBe(4)
        expect(biValue([9,4,4,4,8])).toBe(4)
        expect(biValue([1,2,3,4,5,5,5])).toBe(4)
        expect(biValue([2,2,3,4,5,6,6,6])).toBe(4)
    })
})