import { checkInclusion } from './permutationInString';

describe('finding permuated substrings', () => {
    it('should return true for "ab" in  "eidbaooo"',()=>{
        const inputString1 = "ab";
        const inputString2 = "eidbaooo";
        const output = true;
        expect(checkInclusion(inputString1, inputString2)).toBe(output);
    });
    it('should return false for "ab" in  "eidboaoo"',()=>{
        const inputString1 = "ab";
        const inputString2 = "eidboaoo";
        const output = false;
        expect(checkInclusion(inputString1, inputString2)).toBe(output);
    });
    it('should return false for "hello" in "ooolleoooleh"',()=>{
        const inputString1 = "hello";
        const inputString2 = "ooolleoooleh";
        const output = false;
        expect(checkInclusion(inputString1, inputString2)).toBe(output);
    });
});

