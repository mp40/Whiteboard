import { groupAnagrams } from './groupAnagrams';

describe('grouping anagrams', ()=>{
    it('should return grouped anagrams', () => {
        const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const output = [
            ["ate","eat","tea"],
            ["nat","tan"],
            ["bat"]
          ];
        const result = groupAnagrams(input);
        expect(result.length).toBe(3);
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[0])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[1])]));
        expect(result).toEqual(expect.arrayContaining([expect.arrayContaining(output[2])]));
    });
});
