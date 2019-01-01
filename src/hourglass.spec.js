const {
    hourglassSum
} = require('./hourglass')

describe.only('find the biggest sum of hourglass in 6x6 2D array', () => {
    it('should return 7 on first test array', () => {
        const firstArray = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
        expect(hourglassSum(firstArray)).toEqual(7)
    })
    it('should return 19 on second test array', () => {
        const secondArray = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ]
        expect(hourglassSum(secondArray)).toEqual(19)
    })
})