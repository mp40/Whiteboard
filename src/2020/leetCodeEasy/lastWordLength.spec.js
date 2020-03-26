import {lengthOfLastWord} from './lastWordLength';

describe("finding length of last word in string", () => {
    it("should return length of last word in string", () => {
        const input = "Hello World"
        const output = 5
        expect(lengthOfLastWord(input)).toBe(output)
    })
    it("should return length of last word in string", () => {
        const input = "Hello Biggles"
        const output = 7
        expect(lengthOfLastWord(input)).toBe(output)
    })
    it("should return 0 if no last word", () => {
        const input = ""
        const output = 0
        expect(lengthOfLastWord(input)).toBe(output)
    })
})