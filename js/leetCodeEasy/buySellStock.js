// Best Time to Buy and Sell Stock
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/572/

// export const maxProfit = (prices) => {

// }

/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock),
design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
ANSWER BELOW THIS COMMENT BLOCK
-
-
-
-
-
*/

/*
The points of interest are the peaks and valleys in the given graph. 
We need to find the largest peak following the smallest valley. 
We can maintain two variables - minprice and maxprofit 
corresponding to the smallest valley and maximum profit (maximum difference between selling price and minprice) obtained so far respectively.
*/


export const maxProfit = (prices) => {
    let profit = 0;
    let buy = undefined;

    for(let i = 0; i < prices.length; i++) {

        if(buy === undefined || buy > prices[i]) {
            buy = prices[i]
        } else if(prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }

    return profit;
};