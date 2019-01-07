const {solution, split, calculateDiff, findResult} = require('./tapeEqual')

describe('tape equilibrium problem',()=>{
    const testArray = [3,1,2,4,3]
    it('should cut the tape if the value is greater than o and less than array length',()=>{
        expect(split(3,5)).toEqual(true)
        expect(split(1,5)).toEqual(true)
        expect(split(-1,3)).toEqual(false)
        expect(split(4,2)).toEqual(false)
    })
    it('should calculate diffrence between cut and remainder',()=>{
        expect(calculateDiff(3, 13)).toEqual(7)
        expect(calculateDiff(4, 13)).toEqual(5)
        expect(calculateDiff(6, 13)).toEqual(1)
    })
    it('should return positive numbers with helper calculateDiff',()=>{
        expect(calculateDiff(10,13)).toEqual(7)
    })
    it('should find smallest of two values',()=>{
        expect(findResult(7, undefined)).toEqual(7);
        expect(findResult(5, 7)).toEqual(5);
        expect(findResult(2,1)).toEqual(1)
    })
    it('should return smallest difference it cuts',()=>{
        expect(solution(testArray)).toEqual(1)
    })
})