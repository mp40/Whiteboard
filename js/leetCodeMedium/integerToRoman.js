// Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given an integer, convert it to a roman numeral.
Input is guaranteed to be within the range from 1 to 3999.

Example 1:
Input: 3
Output: "III"

Example 2:
Input: 4
Output: "IV"

Example 3:
Input: 9
Output: "IX"

Example 4:
Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.

Example 5:
Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

export const intToRoman = (num) => {
    const unitsSingle = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const unitsTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const unitsHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const unitsThousands = ["", "M", "MM", "MMM"]

    return unitsThousands[Math.floor(num / 1000)] +
        unitsHundreds[Math.floor(num % 1000 / 100)] +
        unitsTens[Math.floor(num % 100 / 10)] +
        unitsSingle[Math.floor(num % 10)]
};