const solution = require('./brackets')

describe.only('finding if string has nested brackets',()=>{
    it('should return 0 if input string is an odd length',()=>{
        expect(solution("({)")).toEqual(0)
    })
    it('should return 1 if input string is empty',()=>{
        expect(solution("")).toEqual(1)
    })
})