// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string, find the length of the longest substring without repeating characters.

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
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

export const lengthOfLongestSubstring = (s) => {
    if(s.length < 2) {
        return s.length;
    }

    let longest = 1;
    let pointerStart = 0;
    let pointerEnd = 1;

    while(pointerEnd < s.length) {
        if(s.substring(pointerStart, pointerEnd).includes(s.charAt(pointerEnd))) {
            pointerStart++
        } else {
            pointerEnd++
        }

        longest = Math.max(longest, pointerEnd - pointerStart);
    }

    return longest
}