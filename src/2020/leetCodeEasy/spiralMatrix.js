// Spiral Matrix, easy
// https://leetcode.com/problems/spiral-matrix/

/*
Given a matrix of m x n elements (m rows, n columns),
return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// matrix may not be square!
// ie 3 cols and 4 rows

export const spiralOrder = function(matrix) {
    // gaurd clause for edge cases
    if(!matrix.length || !matrix[0].length){
        return [];
    }

    const result = [];

    let rowStart = 0;
    let rowEnd = matrix[0].length - 1;
    let colStart = 0;
    let colEnd = matrix.length - 1;

    while(rowStart <= rowEnd && colStart <= colEnd){
        //top
        for(let i = rowStart; i <= rowEnd; i++){
            result.push(matrix[colStart][i]);
        }
        colStart++

        //right
        for(let i = colStart; i <= colEnd; i++){
            result.push(matrix[i][rowEnd]);
        }
        rowEnd--

        // logic check if cols still valid cause not nxn
        if(colStart <= colEnd){
            //bottom
            for(let i = rowEnd; i >= rowStart; i--){
                result.push(matrix[colEnd][i])
            }
            colEnd--
        }

        // logic check if rows still valid cause not nxn
        if(rowStart <= rowEnd){
            //left
            for(let i = colEnd; i >= colStart; i--){
                result.push(matrix[i][rowStart])
            }
            rowStart++
        }
    }

    return result
};
