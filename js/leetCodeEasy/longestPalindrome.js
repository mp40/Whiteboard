// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/

/*
Given a string s which consists of lowercase or uppercase letters,
return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, 
for example, "Aa" is not considered a palindrome here.

 

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

export const longestPalindrome = function(s) {
    if(s.length === 1) {
        return 1;
    }

    const map = {}
    let result = 0

    for(let i = 0; i < s.length; i++) {
        const letter = s.charAt(i);

        if (!map[letter]) {
            map[letter] = 1;
        } else {
            map[letter] = map[letter] + 1
        }

        if (map[letter] % 2 === 0) {
            result = result + 2;
        }
    }

    for(const k in map) {
        if (map[k] % 2 === 1) {
            result++;
            break;
        }
    }

    return result;
};