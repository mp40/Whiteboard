import { containsDuplicate } from './containsDuplicate';

describe("finding duplicates", () => {
    it('should return true if duplicates exist', () => {
        const input = [1,2,3,1];
        const output = true;
        expect(containsDuplicate(input)).toBe(output);
    })
    it('should return false if no duplicates', () => {
        const input = [1,2,3,4];
        const output = false;
        expect(containsDuplicate(input)).toBe(output);
    })
})