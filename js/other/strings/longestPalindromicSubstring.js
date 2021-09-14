// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

/**
 * param {string} s
 * return {string}
 */

export const longestPalindrome = (s) => {
    if(!s || s.length <= 1) {
      return s
    }

    let longest = s.substring(0, 1)

    for(let i = 0; i < s.length; i++) {
      let temp = expand(s, i, i)
      if(temp.length > longest.length) {
        longest = temp
      }

      temp = expand(s, i, i + 1)
      if(temp.length > longest.length) {
        longest = temp
      }
    }

    return longest
}

  const expand = (s, begin, end) => {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--
      end++
    }
    return s.substring(begin + 1, end)
  }

// https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff