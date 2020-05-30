// Reverse Integer
// https://leetcode.com/problems/reverse-integer/

/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only
store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows.
*/

export const reverse = (x) => {
    const result = x.toString().split("").reverse().join('');
    return x < 0 ? -parseInt(result, 10) : parseInt(result, 10);
};