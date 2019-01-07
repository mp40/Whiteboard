const {solution, convertToBinary} = require('./binaryGap')

describe("calculate binary gap",()=>{
    it('should convert N to binary',()=>{
        expect(convertToBinary(1041)).toEqual("10000010001")
        expect(convertToBinary(15)).toEqual("1111")
        expect(convertToBinary(32)).toEqual("100000")
        expect(convertToBinary(6)).toEqual("110")
    })
    it('should return largest binary gap',()=>{
        expect(solution(5)).toEqual(1)
        expect(solution(1041)).toEqual(5)
        expect(solution(15)).toEqual(0)
        expect(solution(32)).toEqual(0)
        expect(solution(6)).toEqual(0)
    })
})