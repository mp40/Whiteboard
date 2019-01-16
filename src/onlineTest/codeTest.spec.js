const solution = require("./codeTest")

describe("find longest sentence",()=>{
    it('should return the number of words in the largest sentence',()=> {
        expect(solution("We test coders. Give us a try?")).toEqual(4)
        expect(solution("Forget CVs..Save Time . x x")).toEqual(2)
    })
})