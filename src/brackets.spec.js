const {solution, checkOpener} = require('./brackets')

describe.only('finding if string has nested brackets',()=>{
    it('should return 0 if input string is an odd length',()=>{
        expect(solution("({)")).toEqual(0)
    })
    it('should return 1 if input string is empty',()=>{
        expect(solution("")).toEqual(1)
    })
    it('should use helper function to check if opener string includes tested val',()=>{
        expect(checkOpener("()", 0)).toEqual(true)
        expect(checkOpener(")(", 0)).toEqual(false)
    })
    it('should return 1 if matching brackets are parameter',()=>{
        expect(solution("()")).toEqual(1)
    })
    it('should return 1 if given multiple nested brackets',()=>{
        expect(solution("{[()()]}")).toEqual(1)
    })
    it('should reurn 0 if given multiple unnested brackets',()=>{
        expect(solution("([)()]")).toEqual(0)
    })
})