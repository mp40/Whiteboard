import { maxProfit } from './buySellStock2';

describe('Best Time to Buy and Sell Stock II algorithm', () => {
    // Example 1:
    it('should return correct result for Example 1', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(7);
        /*
        Explanation:
        Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
        Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
        */
    })
    // Example 2:
    it('should return correct result for Example 2', () => {
        expect(maxProfit([1,2,3,4,5])).toBe(4);
        /*
        Explanation:
        Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
        Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
        engaging multiple transactions at the same time. You must sell before buying again.
        */
    })
    // Example 3:
    it('should return correct result for Example 3', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
        /*
        Explanation:
        In this case, no transaction is done, i.e. max profit = 0.
        */
    })
})