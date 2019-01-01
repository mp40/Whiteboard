const {
    findStartingStation
} = require('./gasStation')

describe('finding the starting station', () => {
    it('should return -1 if the total of gas is less than the total of cost', () => {
        expect(findStartingStation([1, 1], [3, 3])).toEqual(-1)
    })
    // it('should find the best difference between gas and cost', () => {
    //     expect(findStartingStation([1, 2], [2, 1])).toEqual(1)
    //     expect(findStartingStation([1, 2, 3], [3, 2, 1])).toEqual(2)
    //     expect(findStartingStation([1, 4, 2], [1, 3, 1])).toEqual(1)
    // })
})