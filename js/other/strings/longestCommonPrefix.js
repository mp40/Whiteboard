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

/**
 * param {string[]} strs
 * return {string}
 */

// my solution - terrible performance vs other submitted on leetcode
export const longestCommonPrefix = (strs) => {
    if(strs.length === 0) {
        return "";
    }

    if(strs.length === 1) {
        return strs[0];
    }

    if(strs[0].length < 1) {
        return "";
    }

    let prefix = "";
    let lastScan = strs[0];

    for(let i = 1; i < strs.length; i++) {
        let pointer = 0;
        prefix = "";

        while(pointer < strs[i].length && strs[i].charAt(pointer) === lastScan.charAt(pointer)) {
            prefix += strs[i].charAt(pointer);
            pointer++
        }
        lastScan = prefix.length < lastScan.length ? prefix : lastScan;
    }

    return prefix
};

// this is better about mid range vs others
export const longestCommonPrefixRefactor = (strs) => {
    if(strs.length === 0) {
        return "";
    }

    if(strs.length === 1) {
        return strs[0];
    }

    if(strs[0].length < 1) {
        return "";
    }

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length-1)
        }
    }

    return prefix
};


const memoize = (fn) => {
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

// divide and conquer
// https://leetcode.com/problems/longest-common-prefix/discuss/6992/Javascript-solution-Divide-and-Conquer
// without memo good run time, poor memory usage
// with memo - about average for both, similar to Refactor version
export const longestCommonPrefixDivide = (strs) => {
    if(strs.length === 0) {
        return "";
    }

    if(strs.length === 1) {
        return strs[0];
    }

    if(strs[0].length < 1) {
        return "";
    }

    const half = Math.floor(strs.length / 2);
    const first = longestCommonPrefixDivide(strs.slice(0, half));
    const second = longestCommonPrefixDivide(strs.slice(half, strs.length));

    let prefix = '';

    for(let i = 0; i < first.length && i  < second.length; i++) {
      if(first[i] !== second[i]){
          break;
      }
      prefix += first[i];
    }

    return prefix
};

export const longestCommonPrefixMemo = memoize(longestCommonPrefixDivide)