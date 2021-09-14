// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
*/

export const longestCommonPrefix = (strs) => {
    if(strs.length === 0) {
        return "";
    }

    if(strs.length === 1) {
        return strs[0];
    }

    let result = strs[0];

    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < result.length; j++) {
            if(strs[i].charAt(j) !== result.charAt(j)) {
                result = result.slice(0, j);
                break;
            }
        }
    }

    return result;
};