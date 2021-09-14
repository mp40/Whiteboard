import { maxProfit } from './buySellStock';

describe('Best Time to Buy and Sell Stock algorithm', () => {

    it('should return correct result for Example 1', () => {
        const input = [7,1,5,3,6,4];
        const output = 5
        expect(maxProfit(input)).toBe(output);
        /*
            Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
            Not 7-1 = 6, as selling price needs to be larger than buying price.
        */
    })

    it('should return correct result for Example 2', () => {
        const input = [7,6,4,3,1];
        const output = 0
        expect(maxProfit(input)).toBe(output);
        /*
            Explanation: In this case, no transaction is done, i.e. max profit = 0.
        */
    })
})