// Count And Say
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30,
generate the nth term of the count-and-say sequence.
You can do so recursively,
in other words from the previous member read off the digits,
counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:
Input: 1
Output: "1"
Explanation: This is the base case.

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21"
in which we have two groups "2" and "1",
"2" can be read as "12" which means frequency = 1 and value = 2,
the same way "1" is read as "11",
so the answer is the concatenation of "12" and "11" which is "1211".
*/

export const countAndSay = function(n) {
    if(n < 2) {
        return n + "";
    }

    function count(str){
        //exit condition
        if(n === 0){
            return str;
        }
        let value = 1;

        for(let i = 0; i <  str.length; i++) {
            console.log("?")
            console.log(">>", str.charAt(i), "vs", str.charAt(i+1))
            console.log(typeof str.charAt(i+1))
            console.log("-->", str.charAt(i) !== str.charAt(i+1))
            if(str.charAt(i) !== str.charAt(i+1)){
                console.log("boo")
                console.log("b>", str, value, str.charAt(i))
                console.log('wtf', str + value)
                // str = str + value + str.charAt(i);
                // value = 1;
            }
            // else {
            //     value++
            // }
        }

        n--
        count(str)
    }

    count("1")
};