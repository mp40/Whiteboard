const {
    getMaxProfit
} = require("./stockCalc")

describe('getting max profit', () => {
    it('should return a number', () => {
        const result = getMaxProfit()
        expect(Number.isNaN(result)).toBe(false)
        expect(typeof result).toBe("number")
    })
})