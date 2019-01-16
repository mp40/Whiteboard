const {checkBrackets, checkOpener} = require('./brackets')

describe.only('finding if string has nested brackets',()=>{
    it('should return false if input string is an odd length',()=>{
        expect(checkBrackets("({)")).toEqual(false)
    })
    it('should return true if input string is empty',()=>{
        expect(checkBrackets("")).toEqual(true)
    })
    it('should use helper function to check if opener string includes tested val',()=>{
        expect(checkOpener("()", 0)).toEqual(true)
        expect(checkOpener(")(", 0)).toEqual(false)
    })
    it('should return true if matching brackets are parameter',()=>{
        expect(checkBrackets("()")).toEqual(true)
    })
    it('should return true if given multiple nested brackets',()=>{
        expect(checkBrackets("{[()()]}")).toEqual(true)
    })
    it('should return false if given multiple unnested brackets',()=>{
        expect(checkBrackets("([)()]")).toEqual(false)
    })
    it("should pass the example given by Bespoke",()=>{
        expect(checkBrackets("[()]{}{[()()]()}")).toEqual(true)
    })
    it("should fail the other example from Bespoke",()=>{
        expect(checkBrackets('[(]))')).toEqual(false)
    })
})
