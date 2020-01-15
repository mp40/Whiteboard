// Longest Substring Without Repeating Characters
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/

/*
Given a string,
find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring,
"pwke" is a subsequence and not a substring.
*/

export const lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0;
    }

    // let current = [s.charAt(0)]
    // let result = 1;

    // for(let i=1; i<s.length; i++){
    //     const prevIndex = current.indexOf(s.charAt(i))
    //     if(prevIndex >= 0){
    //         current = current.slice(prevIndex+1)
    //         current.push(s.charAt(i))
    //     } else {
    //         current.push(s.charAt(i))
    //         result = current.length > result ? current.length : result;
    //     }
    // }

    let result = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    let hashSet = new Set();

    while(leftPointer < s.length && rightPointer < s.length){
        if(!hashSet.has(s.charAt(rightPointer))){
            hashSet.add(s.charAt(rightPointer))
            rightPointer++
            result = Math.max(result, rightPointer - leftPointer)
        } else {
            hashSet.delete(s.charAt(leftPointer))
            leftPointer++
        }
    }

    return result;
};