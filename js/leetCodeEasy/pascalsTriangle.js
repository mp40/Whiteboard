// Pascals Triangle
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/

/*
Given a non-negative integer numRows,
generate the first numRows of Pascal's triangle.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

export const generate = function(numRows) {
    if(numRows === 0){
        return [];
    }
    if(numRows === 1){
        return [[1]];
    }

    const result = [[1]];
    for(let i=1; i<numRows; i++){
        const last = result[i-1]
        const next = [1];
        for(let j=1; j<last.length; j++){
            next.push(last[j-1] + last[j])
        }
        next.push(1)
        result.push(next)
    }

    return result;
};