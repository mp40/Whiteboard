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
})