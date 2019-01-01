/*
Input: 6x6 2D array
Output: greatest value of 'hourglass' contained in 2D array
Notes: There are 16 hourglasses in the 2D array
*/

const hourglassSum = function (arr) {
    let result = undefined;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            temp = temp + arr[i + 1][j + 1];
            temp = temp + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (result === undefined) {
                result = temp
            } else {
                if (result < temp) {
                    result = temp
                }
            }
        }
    }
    return result
}

module.exports = {
    hourglassSum
}