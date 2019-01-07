const {solution, split} = require('./tapeEqual')

describe('tape equilibrium problem',()=>{
    const testArray = [3,1,2,4,3]
    it('should cut the tape if the value is greater than o and less than array length',()=>{
        expect(split(3,5)).toEqual(true)
        expect(split(1,5)).toEqual(true)
        expect(split(-1,3)).toEqual(false)
        expect(split(4,2)).toEqual(false)
    })
    it('should return smallest difference it cuts',()=>{
        expect(solution([testArray])).toEqual(1)
    })
})