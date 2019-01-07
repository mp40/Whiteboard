const {solution, convertToBinary} = require('./binaryGap')

describe("calculate binary gap",()=>{
    it('should convert N to binary',()=>{
        expect(convertToBinary(1041)).toEqual("10000010001")
        expect(convertToBinary(15)).toEqual("1111")
        expect(convertToBinary(32)).toEqual("100000")
    })
})