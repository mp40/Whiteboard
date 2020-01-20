// Set Matrix Zeros
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/*
Given a m x n matrix, if an element is 0,
set its entire row and column to 0.
Do it in-place.

Example 1
Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]

Example 2:
Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/

export const setZeroes = function(matrix) {
    let rowLength = matrix[0].length;
    let colLength = matrix.length;
    let colZero = false

    if(matrix[0][0] === 0){
        colZero = true;
    }

    for(let i = 0; i < rowLength; i++){
        for(let j = 1; j < colLength; j++){
            if(matrix[j][i] === 0){
                matrix[j][0] = 0;
                matrix[0][i] = 0;
            }
        }
    }

    for(let i = 1; i < rowLength; i++) {
        for(let j = 1; j < colLength; j++){
            if(matrix[0][i] === 0 || matrix[j][0] === 0){
                matrix[j][i] = 0;
            }
        }
    }

    if(matrix[0][0] === 0){
        for(let i = 0; i < rowLength; i++){
            matrix[0][i] = 0;
        }
    }

    if(colZero){
        for(let i = 0; i < colLength; i++){
            matrix[i][0] = 0;
        }
    }
};