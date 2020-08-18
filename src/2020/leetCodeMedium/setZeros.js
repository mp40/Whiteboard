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
  const cols = {};
  const rows = {};

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        cols[i] = true;
        rows[j] = true;
      }
    }
  }

  for(let i = 0; i < matrix.length; i ++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(cols[i] || rows[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};