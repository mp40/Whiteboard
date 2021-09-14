// rotate image

/*
input is matrix
output is matrix rotated 90 degrees.
try to do with constant space.

Example

input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

output = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/

export const rotate = (matrix) => {
    matrix.reverse();

    for(let i = 0; i < matrix.length; i++) {
        for(let j = i + 1; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    return matrix;
}