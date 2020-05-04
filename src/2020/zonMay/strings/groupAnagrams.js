// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * param {string[]} strs
 * return {string[][]}
 */
export const groupAnagrams = (strs) => {

    const map = {}

    for(let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort();
        map[sorted] = map[sorted] ?  [...map[sorted], strs[i]] : [strs[i]]
    }
    return Object.values(map)
};