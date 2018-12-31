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
    it('should calculate arrays of any length', () => {
        expect(getMaxProfit([10, 7, 5, 8, 11, 9])).toEqual(6)
    })
    it('should only consider values for sellHigh if after the buyLow time', () => {
        expect(getMaxProfit([15, 7, 5, 8, 11, 9])).toEqual(6)
    })
    it('should return 0 if the price never exceeds the buyLow value', () => {
        expect(getMaxProfit([13, 12, 11, 10])).toEqual(0)
    })
})