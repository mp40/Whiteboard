const {
    getMaxProfit
} = require("./stockCalc")

describe('getting max profit', () => {
    it('should return an error if parameter is not array of at least length 2', () => {
        const shortResult = getMaxProfit([0])
        expect(shortResult).toBe("error, parameter too short")
    })
    it('should return the difference between low of 5 and max of 11', () => {
        const arrayOfTwo = getMaxProfit([5, 11])
        expect(arrayOfTwo).toEqual(6)
    })
})