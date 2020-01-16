// Valid Parentheses
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/

/*
Given a string containing just the characters
'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true

Example 2:
Input: "()[]{}"
Output: true

Example 3:
Input: "(]"
Output: false

Example 4:
Input: "([)]"
Output: false

Example 5:
Input: "{[]}"
Output: true
*/

export const isValid = function(s) {
    if(s.length === 0){
        return true;
    }
    if(s.length %2 !== 0){
        return false;
    }

    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    // push open ones on stack
    // if the next is closer, see if it matches the last on stack
    // pop stack if valid

    const stack = [];

    for(let i=0; i<s.length; i++){
        if(map[s.charAt(i)] !== undefined){
            stack.push(s.charAt(i));
        } else {
            if(map[stack.pop()] !== s.charAt(i)){
                return false
            }
        }
    }

    return stack.length === 0;
};