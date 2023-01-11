// Valid Palindrome
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/*
Given a string, determine if it is a palindrome,
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

// this beat 99.19% of runtimes for all other JS submissions
export const isPalindrome = function(s) {
    const cleanString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let startPointer = 0;
    let endPointer = cleanString.length-1;

    while(startPointer < endPointer){
        if(cleanString.charAt(startPointer) !== cleanString.charAt(endPointer)){
            return false;
        }
        startPointer++
        endPointer--
    }
    return true;
};