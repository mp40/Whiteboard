const {findValue, recurseFib} = require('./fibonacci')

describe('finding the value of the nth number in the fibonacci sequence',()=>{
    it('should return the sum of the previous two values',()=>{
        expect(findValue(3)).toBe(2)
        expect(findValue(5)).toBe(5)
        expect(findValue(7)).toBe(13)
    })
    it("should return 1 if n is 1",()=>{
        expect(findValue(1)).toBe(1)
    })
})

describe('find the nth number using recursion',()=>{
    it('should return the sum of the previous two values',()=>{
        expect(recurseFib(3)).toBe(2)
        expect(recurseFib(5)).toBe(5)
        expect(recurseFib(7)).toBe(13)
    })
    it("should return 1 if n is 1",()=>{
        expect(recurseFib(1)).toBe(1)
    })
})