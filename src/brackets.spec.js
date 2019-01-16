const {solution, checkOpener} = require('./brackets')

describe.only('finding if string has nested brackets',()=>{
    it('should return false if input string is an odd length',()=>{
        expect(solution("({)")).toEqual(false)
    })
    it('should return true if input string is empty',()=>{
        expect(solution("")).toEqual(true)
    })
    it('should use helper function to check if opener string includes tested val',()=>{
        expect(checkOpener("()", 0)).toEqual(true)
        expect(checkOpener(")(", 0)).toEqual(false)
    })
    it('should return true if matching brackets are parameter',()=>{
        expect(solution("()")).toEqual(true)
    })
    it('should return true if given multiple nested brackets',()=>{
        expect(solution("{[()()]}")).toEqual(true)
    })
    it('should return false if given multiple unnested brackets',()=>{
        expect(solution("([)()]")).toEqual(false)
    })
    it("should pass the example given by Bespoke",()=>{
        expect(solution("[()]{}{[()()]()}")).toEqual(true)
    })
    it("should fail the other example from Bespoke",()=>{
        expect(solution('[(]))')).toEqual(false)
    })
})
