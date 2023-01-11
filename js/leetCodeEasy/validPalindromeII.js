// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:
1 <= s.length <= 10 to the power of 5
s consists of lowercase English letters.
*/

// passes tests here but times out on leetcode
export const validPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str.charAt(left) !== str.charAt(right)) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s.charAt(start) !== s.charAt(end)) {
      const a = isPalindrome(s, start + 1, end);
      const b = isPalindrome(s, start, end - 1);

      if (!a && !b) {
        return false;
      }
    }

    start++;
    end--;
  }

  return true;
};
